import axios from "axios";
//React
import { React, useState, useEffect } from "react";

//Material-ui/core
import {
  CircularProgress,
  IconButton,
  Grid,
  TextField,
  makeStyles,
} from "@material-ui/core";

//Material-ui/icon
import SearchIcon from "@material-ui/icons/Search";

//Componets
import News from "./partials/News";
import Weather from "./partials/Weather";

const useStyles = makeStyles({
  root: {
    marginTop: 20,
  },
  input: {
    marginRight: 15,
    backgroundColor: "White",
    borderRadius: 4,
  },
});

export default function Find() {
  const [city, setCity] = useState("");
  const [load, setLoad] = useState(false);
  const [articles, setArticles] = useState([]);
  const [weather, setWeather] = useState({});

  const onchange_text = (e) => {
    const value = e.target.value;
    setCity(value);
  };

  const finding_or_loading = () => {
    let componet;
    if (load === true) {
      componet = <CircularProgress />;
      return componet;
    }
    componet = (
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        onClick={() => find_data_in_api(false)}
      >
        <SearchIcon />
      </IconButton>
    );

    return componet;
  };

  const find_data_in_api = async (isHistory) => {
    setLoad(!load);

    let queryParam;
    if (isHistory) {
      const url = window.location.search;
      queryParam = new URLSearchParams(url).get("city");
    } else {
      queryParam = city.toLowerCase();
    }

    const url = `https://localhost:5001/principal?city=${queryParam}`;

    try {
      const res = await axios.get(url);
      setArticles(res.data.article.articles);
      setWeather(res.data.weather);
    } catch (error) {
      alert(error + " Sin resultados para esta ciudad");
    }
    setLoad(false);
  };

  const is_articles_empty = () => {
    if (articles.length > 0) {
      let key = 0;
      const news = articles.map((article) => {
        if (article.urlToImage === null) {
          article.urlToImage =
            "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png";
        }
        if (article.author === null) {
          article.author = "anonymus";
        }
        if (article.description === null) {
          article.description = "Sin Descripcion";
        }
        return <News key={key++} news={article} />;
      });
      return news;
    }
  };

  const is_weather_empty = () => {
    if (Object.keys(weather).length > 0) {
      const weatherComponet = <Weather weather={weather} />;
      return weatherComponet;
    }
  };

  useEffect(() => {
    const url = window.location.search;
    const queryParam = new URLSearchParams(url).get("city");
    if (queryParam) {
      find_data_in_api(true);
    }
  }, []);

  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
        className={classes.root}
      >
        <TextField
          id="filled-basic"
          label="Ingresa una Ciudad"
          variant="filled"
          className={classes.input}
          onChange={(e) => onchange_text(e)}
        />
        {finding_or_loading()}
        {is_weather_empty()}
      </Grid>
      <Grid container className={classes.root}>
        {is_articles_empty()}
      </Grid>
    </div>
  );
}
