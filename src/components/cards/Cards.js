import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  StylesProvider,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import { dataLoad } from "../../actions/dataAction";
import styles from "./cards.css";
export const Cards = () => {
  const { confirmed, recovered, deaths, lastUpdate, isLoading } = useSelector(
    (state) => state.data
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataLoad());
  }, [dispatch]);
  if (isLoading) {
    return "Loading";
  }

  return (
    <div className="container">
      <Grid container spacing={3} justify="center">
        <Grid iten component={Card} className="card recovered">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography varaiant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {" "}
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography varaiant="body2">
              Number of recovers cases of COVID 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid iten component={Card} className="card death">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography varaiant="h5">
              {" "}
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography varaiant="body2">
              Number of active cases of COVID 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid iten component={Card} className="card infected">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography varaiant="h5">
              {" "}
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography varaiant="body2">
              Number of active cases of COVID 19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
