import SearchDataReducer from "./SearchData";

const { combineReducers } = require("redux");
const { default: dataDetailsReducer } = require("./dataDetails");

const rootReducer = combineReducers({
  data: dataDetailsReducer,
  search: SearchDataReducer,
});

export default rootReducer;
