//react
import React from "react";
import { Link } from "react-router-dom";

//Material-ui/core
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";

//Material-ui/core/icons
import HistoryIcon from "@material-ui/icons/History";
import HomeIcon from "@material-ui/icons/Home";
import FindInPageIcon from "@material-ui/icons/FindInPage";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            PRUEBA TECNICA
          </Typography>
          <Button
            color="inherit"
            component={Link}
            startIcon={<HomeIcon />}
            to="/principal"
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            startIcon={<FindInPageIcon />}
            to="/find"
          >
            Buscar
          </Button>
          <Button
            color="inherit"
            component={Link}
            startIcon={<HistoryIcon />}
            to="/history"
          >
            Historial
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
}
