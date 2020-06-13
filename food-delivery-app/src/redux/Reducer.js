import { SEARCH_ITEM } from "./ActionTypes";
import data from "../components/data/data.json";

const initState = {
  data: data[0],
  searchData: [],
};
console.log(initState.data);
console.log(initState.searchData);
const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SEARCH_ITEM:
      return {
        ...state,
        searchData: state.data[payload],
      };

    default:
      return state;
  }
};

export default reducer;
