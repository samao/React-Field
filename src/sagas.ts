/*
 * @Author: iDzeir
 * @Date: 2018-11-22 14:12:41
 * @Last Modified by: iDzeir
 * @Last Modified time: 2018-11-23 18:02:20
 */
import { eventChannel, END, delay, channel, buffers } from 'redux-saga';
import { take, call, put, apply, fork, actionChannel } from 'redux-saga/effects';
import { log } from 'util';

function countdown(secs: number) {
    return eventChannel(emitter => {
        const iv = setInterval(() => {
            secs -= 1;
            if (secs >= 0) emitter(secs);
            else emitter(END);
        }, 1000);

        return () => clearInterval(iv);
    });
}

export default function* main() {
    log('启动saga');
    const chan = yield call(countdown, 20);
    try {
        while (true) {
            let seconds = yield take(chan);
            log(`countdown: ${seconds}`);
            yield put({ type: 'SAY_HELLO_PAYLOAD', msg: `倒计时：${seconds}` });
        }
    } finally {
        log('countdown terminated');
        yield put({ type: 'SAY_HELLO_PAYLOAD', msg: `countdown terminated` });
    }
}

function createSocketChannel(socket: any) {
    return eventChannel(emitter => {
        const pingHandler = (event: any) => {
            emitter(event.payload);
        };

        socket.on('ping', pingHandler);

        return () => {
            socket.off('ping', pingHandler);
        };
    });
}

function* pong(socket: any) {
    yield call(delay, 5000);
    yield apply(socket, socket.emit, ['pong']);
}

function* watchOnPings() {
    const socket = yield call(() => new WebSocket('ws://haha'));
    const socketChannel = yield call(createSocketChannel, socket);

    while (true) {
        const payload = yield take(socketChannel);
        yield put({ type: 'INCOMING_PONG_PAYLOAD', payload });
        //这里非阻塞，直接进入等待ping
        yield fork(pong, socket);
    }
}

//--------自动负载均衡channel

function* watchRequest() {
    const chan = yield call(channel);
    for (let i = 0; i < 3; ++i) {
        yield fork(handleRequest, chan);
    }

    while (true) {
        const { payload } = yield take('REQUEST');
        yield put(chan, payload);
    }
}

function* handleRequest(chan: any) {
    const API = {
        fetch: (payload: any) => Promise.resolve({ code: 0, data: 'GUUUD' })
    };
    while (true) {
        const payload = yield take(chan);
        const data = yield call(API.fetch, payload);
    }
}

function sayHello(name: string, msg: string, delay: number) {
    return ``;
}

type TypedMap<T extends any[]> = T[number];

type num = TypedMap<[number, string]>

function toDo<T extends (...arg: any[]) => any>(fn: T, ...parg: T extends (...arg: infer A) => any ? A : any): ReturnType<T> {
    return fn(...parg);
}

toDo(sayHello, '王二小','nihao', 90);

const throttle = (ms: number, pattern: any, task: any, ...args: any[]) =>
    fork(function*() {
        const throttleChannel = yield actionChannel(pattern, buffers.sliding(1));

        while (true) {
            const action = yield take(throttleChannel);
            yield (<any>fork)(task, ...args, action);
            yield delay(ms);
        }
    });
