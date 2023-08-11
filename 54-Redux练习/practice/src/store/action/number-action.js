export const INCREASE = Symbol('increase');
export const DECREASE = Symbol('decrease');
export const SET = Symbol('set');

export const createIncrease = () => ({ type: INCREASE });

export const createDecrease = () => ({ type: DECREASE });

export const createSetAction = (newNumber) => ({
    type: SET,
    payload: newNumber
});