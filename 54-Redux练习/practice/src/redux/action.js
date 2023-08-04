import * as actionType from './action-type'

export const getIncrease = () => ({ type: actionType.INCREASE });

export const getDecrease = () => ({ type: actionType.DECREASE });

export const getSetAction = (newNumber) => (
    { type: actionType.SET, payload: newNumber }
);