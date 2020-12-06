const intialState = {
  confirmed: {},
  recovered: {},
  deaths: {},
  lastUpdate: {},
  isLoading: true,
};

const SearchDataReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SEARCH_DATA":
      return {
        ...state,
        confirmed: action.payLoad.confirmedCases,
        recovered: action.payLoad.recoveredCases,
        deaths: action.payLoad.deathCases,
        lastUpdate: action.payLoad.lastUpdateCases,
        isLoading: false,
      };
    case "LOADING":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default SearchDataReducer;
