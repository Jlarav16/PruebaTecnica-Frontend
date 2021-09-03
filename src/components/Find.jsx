import axios from "axios";
//React
import { React, useState } from "react";

//Material-ui/core
import {
  CircularProgress,
  IconButton,
  Grid,
  TextField,
} from "@material-ui/core";

//Material-ui/icon
import SearchIcon from "@material-ui/icons/Search";

export default function Find() {
  const [city, setCity] = useState("");
  const [load, setLoad] = useState(false);
  //const [news, setNews] = useState({});

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
        onClick={() => find_data_in_api()}
      >
        <SearchIcon />
      </IconButton>
    );

    return componet;
  };

  const onchange_text = (e) => {
    const value = e.target.value;
    setCity(value);
  };

  const find_data_in_api = async () => {
    setLoad(!load);
    const queryParam = city.toLowerCase();
    const url = `https://localhost:5001/principal?city=${queryParam}`;
    const res = await axios.get(url);
    console.log(res.data.article);
    setLoad(false);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      wrap="nowrap"
      style={{
        marginTop: 20,
      }}
    >
      <TextField
        id="filled-basic"
        label="Ingresa una Ciudad"
        variant="outlined"
        color="primary"
        style={{
          marginRight: 15,
        }}
        onChange={(e) => onchange_text(e)}
      />
      {finding_or_loading()}
    </Grid>
  );
}
