import ActionTypes from "./actionTypes";

export const create = (payload) => ({ type: ActionTypes.CREATE, payload });
export const setTodo = (payload) => ({ type: ActionTypes.SET, payload });
export const remove = (payload) => ({ type: ActionTypes.DELETE, payload });
export const toggle = (payload) => ({ type: ActionTypes.TOGGLE, payload });
export const update = (payload) => ({ type: ActionTypes.UPDATE, payload });
