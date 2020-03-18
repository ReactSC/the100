import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Card,
  Typography,
  CardMedia,
  CardContent,
  IconButton,
  Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Share, Star, Print } from '@material-ui/icons';

// import Components
import { PersonCentext } from '../store';
import { BackButton } from '../widgets'

// JSS code
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    cursor: 'pointer',
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 100
  },
  p: {
    marginTop: 10,
    minHeight: '400px',
    background: '#581D8D',
    color: '#fff',
    padding: 10,
  }
}));


const Single = props => {
  const person = useContext(PersonCentext).person;
  const id = Number(props.match.params.id);
  
  // let find = user.find(f => (Number(f.id) === id));
  // if (find === undefined) {
    //   find = user.find(f => (Number(f.id) === 1))
    // }
  const find = person[id - 1];
  if (find === undefined) {
    return (
      <h4 className="mx-auto text-center" variant="p">
        Something Error!
      </h4>
    )
  }

  // Change The Document Title as The Person Name
  // document.title = `${find.id}. ${find.name} | The 100`;
  document.title = `${id}. ${find.name} ${find.surname} | The 100`;


  return (
    <Fragment>
      <BackButton />
      <Grid container justify="center">
        <ContentHeader
          avater={find.photo}
          name={`${find.name}  ${find.surname}`}
          alive={`${new Date(find.birthday.raw).getFullYear()} - ${new Date(
            find.birthday.raw
          ).getFullYear()}`}
          country={find.region}
        />
      </Grid>

      <Grid container justify="center">
        <ContentBody />
      </Grid>
    </Fragment>
  );
}
export default Single;


const ContentHeader = props => {
  const classes = useStyles();

  // Distructure from Props
  const { avater, name, alive, country } = props;


  return (
    <Grid item lg={6} md={8} xs={12} >
      <Card className={classes.root} >
        {/* Card Media */}
        <CardMedia className={classes.cover} image={avater} title={name} />

        {/* Card Contents */}
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>

          <Typography variant="subtitle1" color="textSecondary">
            {alive}
            <Link className="ml-2" to={`/s/${country}`}>
              {country}
            </Link>
          </Typography>
        </CardContent>
        <div className="mx-2 my-auto">
          <IconButton size="small"> <Share /> </IconButton>
          <br/>
          <IconButton size="small"> <Star /> </IconButton>
          <br/>
          <IconButton size="small"> <Print /> </IconButton>
        </div>
      </Card>
    </Grid>
  )
}


const ContentBody = props => {
  const classes = useStyles();
  return (
    <Grid item lg={6} md={8} xs={12} >
      <Paper className={classes.p}>
        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
      </Paper>
    </Grid>
  )
}