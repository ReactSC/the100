import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Card,
  Typography,
  CardMedia,
  CardContent
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SettingContext } from '../store';


const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    display: "flex",
    cursor: "pointer",
    boxShadow: "none",
    margin: "auto"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 100
  },
  sl: {
    minWidth: "100px",
    background: "#ffffffcc",
    padding: "2px 5px",
    fontWeight: 500
  }
});

const SingleCard = props => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useContext(SettingContext).theme;

  // Distructure from Props
  const { avater, name, sl, alive, country } = props;
  
  const clickHandler = id => {
    history.action === "POP" && history.push(`/v/${sl}`);
  }

  return (
    <Grid item lg={3} md={4} sm={6} xs={12} >
      <Card
        style={{ background: theme.card }}
        className={classes.root}
        onClick={() => clickHandler(sl)}
      >
        {/* Card Media */}
        <CardMedia className={classes.cover} image={avater} title={name}>
          { sl && <span className={classes.sl}>{sl}</span> }
        </CardMedia>

        {/* Card Contents */}
        <CardContent className={classes.content}>
          <Typography
            component="h5"
            variant="h5"
            style={{ color: theme.color }} >
            {name}
          </Typography>

          <Typography
            variant="subtitle1"
            style={{ color: theme.colorSecondary }}>
            {alive}

            <Link
              className="ml-2"
              style={{ color: theme.colorSecondary }}
              to={`/country/${country}`}>
              {country}
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
export default SingleCard;

// Get Props
// Media-> Image          -> avater
// Media-> Title          -> name
// Media-> Serial         -> sl
// Content-> Name         -> name
// Content-> alive        -> alive
// Content-> Country      -> country