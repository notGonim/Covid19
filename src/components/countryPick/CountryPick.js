import React, { useEffect, useState } from "react";
import "./CountryPick.css";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { dataLoad } from "../../actions/dataAction";
import { SearchData } from "../../actions/SearchData";
import CountUp from "react-countup";

export const CountryPick = () => {
  const { confirmed, recovered, deaths, lastUpdate, isLoading } = useSelector(
    (state) => state.search
  );
  const [country, setCountry] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setCountry(e.target.value);

  };
  const handleSearch = () => {
    dispatch(SearchData(country));
    setShow(true);
    setCountry("");

  };

  return (
    <>
      <div className="con">
        <form>
          <input type="text" onChange={handleInput} value={country} />
          <button type="button" onClick={handleSearch}>
            Search
          </button>
        </form>
        {show && (
          <div className="res">
            <Grid iten component={Card} className="card recovered_country">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Recovered
                </Typography>
                <Typography varaiant="h5">{recovered.value}</Typography>
                <Typography color="textSecondary">
                  {" "}
                  {new Date(lastUpdate).toDateString()}{" "}
                </Typography>
                <Typography varaiant="body2">
                  Number of recovers cases of COVID 19
                </Typography>
              </CardContent>
            </Grid>
            <Grid iten component={Card} className="card death_country">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Death
                </Typography>
                <Typography varaiant="h5">{deaths.value}</Typography>
                <Typography color="textSecondary">
                  {" "}
                  {new Date(lastUpdate).toDateString()}{" "}
                </Typography>
                <Typography varaiant="body2">
                  Number of death cases of COVID 19
                </Typography>
              </CardContent>
            </Grid>
            <Grid iten component={Card} className="card infected_country">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Infected
                </Typography>
                <Typography varaiant="h5">{confirmed.value}</Typography>
                <Typography color="textSecondary">
                  {" "}
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography varaiant="body2">
                  Number of active cases of COVID 19
                </Typography>
              </CardContent>
            </Grid>
          </div>
        )}
      </div>
    </>
  );
};
