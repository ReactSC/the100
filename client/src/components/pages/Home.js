import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';

import { SingleCard } from '../widgets';
import { PersonCentext, SettingContext } from '../store';

const Home = () => {
  const person = useContext(PersonCentext).person;

  return (
    <Grid container spacing={2}>
      {person.map((x, i) => (
        <SingleCard
          key={ i }
          avater={ x.photo }
          name={ `${x.name} ${x.surname}` }
          sl={ i + 1 }
          alive={`${new Date(x.birthday.raw).getFullYear()}`  }
          country={ x.region }
        />
      ))}
    </Grid>
  );
}
export default Home;

// Supply Props
  // Media-> Image          -> avater
  // Media-> Title          -> name
  // Media-> Serial         -> sl
  // Content-> Name         -> name
  // Content-> alive        -> alive
  // Content-> Country      -> country
  // Content-> CountryCode  -> c