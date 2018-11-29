function enumerable(value: boolean) {
    //console.log('Enter enumerable');
    return function(target: any, pk: string, des: PropertyDescriptor) {
        //console.log('enumerable return call!');
        des.enumerable = value;
    };
}

function dispatch(constructor: Function) {
    constructor.prototype.dispatch = (action: any) => {
        //console.log('dispatch:',action)
    }
}

@dispatch
class Greeter {
    constructor(public greeting: string) {}

    @enumerable(false)
    greet() {
        //console.log('greeter is greet()');
        (<any>greeter).dispatch('guuud')
        return 'Hello, ' + this.greeting;
    }
}

let greeter = new Greeter('王二小');
greeter.greet();