import React, { Fragment } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  Card: {
    backgroundColor: "#3d5485",
    marginLeft: 10,
    marginRight: 10,
    color: "White",
  },
  Typography: {
    color: "black",
  },
});

export default function Weather(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container item xs={12} justifyContent="center">
        {/* TEMPERATURA */}
        <Card variant="outlined" className={classes.Card}>
          <CardContent>
            <Typography
              color="textSecondary"
              className={classes.Typography}
              gutterBottom
            >
              <b>{props.weather.name}</b>
            </Typography>
            <Typography variant="h5" component="h2">
              {props.weather.main.temp}°
            </Typography>
            <Typography color="textSecondary" className={classes.Typography}>
              <b>temperatura maxima</b>
            </Typography>
            <Typography variant="body2" component="p">
              {props.weather.main.temp_max}°
              <br />
            </Typography>
            <Typography color="textSecondary" className={classes.Typography}>
              <b>temperatura minima</b>
            </Typography>
            <Typography variant="body2" component="p">
              {props.weather.main.temp_min}°
              <br />
            </Typography>
          </CardContent>
        </Card>
        {/* CLIMA */}
        <Card variant="outlined" className={classes.Card}>
          <CardContent>
            <Typography
              color="textSecondary"
              className={classes.Typography}
              gutterBottom
            >
              <b>{props.weather.weather[0].main}</b>
            </Typography>
            <Avatar
              alt="Example Alt"
              src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}
            />
            <Typography variant="h5" component="h2">
              {props.weather.weather[0].description}
            </Typography>
            <Typography color="textSecondary">
              <b className={classes.Typography}>humedad:</b>{" "}
            </Typography>
            <Typography variant="body2" component="p">
              {props.weather.main.humidity}%
            </Typography>
          </CardContent>
        </Card>
        {/* VIENTO */}
        <Card variant="outlined" className={classes.Card}>
          <CardContent>
            <Typography
              color="textSecondary"
              className={classes.Typography}
              gutterBottom
            >
              <b>Viento</b>
            </Typography>
            <Avatar
              alt="Example Alt"
              src="https://maxcdn.icons8.com/Share/icon/color/Weather/windy_weather1600.png"
            />
            <Typography variant="h5" component="h2">
              {props.weather.wind.speed} KPH
            </Typography>
            <Typography color="textSecondary">
              <b className={classes.Typography}>presion:</b>{" "}
            </Typography>
            <Typography variant="body2" component="p">
              {props.weather.main.pressure} in
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Fragment>
  );
}
