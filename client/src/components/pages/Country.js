import React, { Fragment, useContext } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { PersonCentext, SettingContext } from '../store';
import { BackButton, SingleCard } from "../widgets";

const Country = props => {
  const person = useContext(PersonCentext).person;
  const theme = useContext(SettingContext).theme;
  const country = props.match.params.country;

  const filter = person && person.filter(p => p.region === country);

  document.title = `${country}'s Person | The 100`;
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
        People of {country}
      </Typography>

      <Grid container spacing={2} justify="center">
        {filter && filter.map((x, i) => (
          <SingleCard
            key={i}
            avater={x.photo}
            name={`${x.name} ${x.surname}`}
            alive={`${new Date(x.birthday.raw).getFullYear()}`}
            country={x.region}
          />
        ))}
      </Grid>
    </Fragment>
  );
}
export default Country;