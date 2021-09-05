//React
import React from "react";

//Material-ui/core
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  makeStyles,
} from "@material-ui/core";

//Material-ui/icon
import VisibilityIcon from "@material-ui/icons/Visibility";

const useStyles = makeStyles({
  root: {
    margin: 5,
  },
  media: {
    height: 140,
  },
});

export default function News(props) {
  const classes = useStyles();
  return (
    <Grid container item xs={4} justifyContent="center">
      <Card
        className={classes.root}
        onClick={() => window.open(props.news.url)}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.news.urlToImage}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {props.news.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.news.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <VisibilityIcon />
          <Typography variant="body2" color="textSecondary" component="p">
            <b>author: </b>
            {props.news.author}
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
}
