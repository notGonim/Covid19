const { combineReducers } = require("redux");
const { default: dataDetailsReducer } = require("./dataDetails");

const rootReducer = combineReducers({
  data: dataDetailsReducer,
});

export default rootReducer;
