import Axios from "axios";
import { dataUrlCountry } from "../api";

export const SearchData = (country) => async (dispatch) => {
  const data = await Axios.get(dataUrlCountry(country));
  
  dispatch({
    type: "SEARCH_DATA",
    payLoad: {
      confirmedCases: data.data.confirmed,
      recoveredCases: data.data.recovered,
      deathCases: data.data.deaths,
      lastUpdateCases: data.data.lastUpdate,
    },
  });
};
