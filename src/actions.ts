/*
 * @Author: iDzeir
 * @Date: 2018-11-19 15:40:49
 * @Last Modified by: iDzeir
 * @Last Modified time: 2018-11-29 15:02:10
 */

export default {
    add: {
        type: 'ADD',
        payload: 10
    },
    reduce: {
        type: 'REDUCE',
        payload: 5
    },
    fetch: (data: any) => ({
        type: 'GET_VIDEO',
        payload: data
    })
};
