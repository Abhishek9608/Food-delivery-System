import { SEARCH_ITEM, ADD_ITEM, LOG_IN } from "./ActionTypes";
import data from "../components/data/data.json";

const initState = {
  data: data[0],
  searchData: [],
  cartItem: [],
  isLogged: false,
  user: {
    username: "admin",
    password: "admin",
  },
};
console.log(initState.data);
console.log(initState.cartItem.length);
// console.log(initState.searchData);
const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SEARCH_ITEM:
      return {
        ...state,
        searchData: state.data[payload],
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItem: [...state.cartItem, payload],
      };
    case LOG_IN:
      console.log(payload);
      return {
        ...state,
        isLogged: payload,
      };
    default:
      return state;
  }
};

export default reducer;
