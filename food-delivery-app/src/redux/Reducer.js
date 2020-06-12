// import { SEARCH_ITEM } from "./ActionTypes";
import data from "../components/data/data.json";

const initState = {
  data: data,
};
console.log(data);

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    // case SEARCH_ITEM:

    default:
      return state;
  }
};

export default reducer;
