import React, { Fragment, useContext } from 'react';
import { Grid, Typography, Toolbar } from '@material-ui/core';

import { PersonCentext, SettingContext } from '../store';
import { BackButton, SingleCard } from "../widgets";

const Favourite = () => {
  const person = useContext(PersonCentext).person;
  const theme = useContext(SettingContext).theme;

  document.title = "Favourite List | The 100";

  return (
    <Fragment>
      <BackButton />
      <Typography
        variant="h4"
        style={{
          color: theme.color,
          textAlign: 'center',
          marginBottom: 25
        }}
      >Favourite {12}</Typography>

      <Grid container spacing={2} justify="center">
        {person.map((x, i) => (
          <SingleCard
            key={i}
            avater={x.photo}
            name={`${x.name} ${x.surname}`}
            sl={i + 1}
            alive={`${new Date(x.birthday.raw).getFullYear()}`}
            country={x.region}
          />
        ))}
      </Grid>
    </Fragment>
  );
}
export default Favourite;