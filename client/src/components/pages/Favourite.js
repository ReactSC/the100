import React, { Fragment, useContext } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { PersonCentext, SettingContext } from '../store';
import { BackButton, SingleCard } from "../widgets";

const Favourite = () => {
  const person = useContext(PersonCentext).person;
  const theme = useContext(SettingContext).theme;
  

  const fevStore = localStorage.fev ?
    JSON.parse(localStorage.getItem('fev'))
      .sort((a, b) => a - b)
    : [];
  
  document.title = `(${fevStore.length}) Favourite List | The 100`;
  return (
    <Fragment>
      <BackButton />
      <Typography
        variant="h4"
        style={{
          color: theme.color,
          textAlign: 'center',
          marginBottom: 25
        }} >
        Favourite {fevStore.length}
      </Typography>

      <Grid container spacing={2} justify="center">
        {
          fevStore && fevStore.map((item, i) =>
            person[item-1] &&
            <SingleCard
              key = { i }
              avater = { person[item].photo }
              name = { `${person[item].name} ${person[item].surname}` }
              sl = { item }
              alive = { `${new Date(person[item].birthday.raw).getFullYear()}` }
              country = { person[item].region }
            />
          )
        }
      </Grid>
    </Fragment>
  );
}
export default Favourite;