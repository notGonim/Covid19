const intialState = {
  confirmed: {},
  recovered: {},
  deaths: {},
  lastUpdate: {},
  isLoading: true,
};

const dataDetailsReducer = (state = intialState, action) => {
  switch (action.type) {
    case "FETCHING_DATA":
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

export default dataDetailsReducer;
