import { SEARCH_ITEM, ADD_ITEM, COUNTER_ITEM } from "./ActionTypes";
import data from "../components/data/data.json";
// import { searchItem } from "./Action";

const initState = {
  data: data[0],
  searchData: [],
  cartItem: [],
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

    default:
      return state;
  }
};

export default reducer;
