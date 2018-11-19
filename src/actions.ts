/*
 * @Author: iDzeir
 * @Date: 2018-11-19 15:40:49
 * @Last Modified by: iDzeir
 * @Last Modified time: 2018-11-19 16:08:54
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
    fetch: () => ({
        type: 'GET_VIDEO',
        payload: fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json())
    })
};
