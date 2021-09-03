//react
import { React, useEffect, useState } from "react";

//Material-ui/core
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Grid,
} from "@material-ui/core";

import axios from "axios";

const useStyles = makeStyles({
  table_position: {
    display: "flex",
    justifyContent: "center",
  },
  table_head: {
    backgroundColor: "Gray",
  },
});

export default function History() {
  const classes = useStyles();
  const [history, setHistory] = useState([]);

  const get_data = async () => {
    const res = await axios.get("https://localhost:5001/history");
    if (res.status !== 200) {
      alert("No se pudo cargar los datos");
    } else {
      setHistory(res.data);
    }
  };

  useEffect(() => {
    get_data();
  }, []);

  return (
    <Grid item xs={12} className={classes.table_position}>
      <Grid item xs={9}>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead className={classes.table_head}>
              <TableRow>
                <TableCell>
                  <strong>ID</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>CITY</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>COUNTRY</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>DATE</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {history.map((item) => (
                <TableRow key={item.id}>
                  <TableCell align="left">{item.id}</TableCell>
                  <TableCell align="center">{item.city}</TableCell>
                  <TableCell align="center">{item.country}</TableCell>
                  <TableCell align="center">{item.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
