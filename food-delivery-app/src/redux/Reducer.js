import { SEARCH_ITEM, ADD_ITEM, LOG_IN, DELETE_ITEM } from "./ActionTypes";
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
  checkItem: [],
};
console.log(initState.data);
console.log(initState.cartItem.length);
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
    case DELETE_ITEM:
      return {
        ...state,
        cartItem: state.cartItem.filter((val) => val.id !== payload),
      };

    default:
      return state;
  }
};

export default reducer;
