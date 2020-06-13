import { SEARCH_ITEM, ADD_ITEM } from "./ActionTypes";

export const searchItem = (payload) => ({
  type: SEARCH_ITEM,
  payload,
});

export const addItem = (payload) => ({
  type: ADD_ITEM,
  payload,
});
