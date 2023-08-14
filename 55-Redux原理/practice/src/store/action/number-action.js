export const INCREASE = Symbol('increase');
export const DECREASE = Symbol('decrease');
export const SET = Symbol('set');
/**
 * 用来生成action
 */
export const createIncrease = () => ({ type: INCREASE });

export const createDecrease = () => ({ type: DECREASE });

export const createSetAction = (newNumber) => ({
    type: SET,
    payload: newNumber
});