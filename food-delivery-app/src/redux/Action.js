import { SEARCH_ITEM, ADD_ITEM, LOG_IN, CHECK_OUT_ITEM } from "./ActionTypes";

export const searchItem = (payload) => ({
  type: SEARCH_ITEM,
  payload,
});

export const addItem = (payload) => ({
  type: ADD_ITEM,
  payload,
});
export const logIn = (payload) => ({
  type: LOG_IN,
  payload,
});
export const checkOutItem = (payload) => ({
  type: CHECK_OUT_ITEM,
  payload,
});
