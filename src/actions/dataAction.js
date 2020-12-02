import Axios from "axios";
import { dataUrl } from "../api";

export const dataLoad = () => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  const data = await Axios.get(dataUrl());
  dispatch({
    type: "FETCHING_DATA",
    payLoad: {
      confirmedCases: data.data.confirmed,
      recoveredCases: data.data.recovered,
      deathCases: data.data.deaths,
      lastUpdateCases: data.data.lastUpdate,
    },
  });
};
