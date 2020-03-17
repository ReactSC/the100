import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// JSS Code
const useStyles = makeStyles(theme => ({
  appBar: {
    top: 0,
    background:'#581D8D'
  },
}))

const Header = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="fixed" className={ classes.appBar }>
        <Toolbar>
          <Typography variant="h5">
            <Link className="text-light" style={{textDecoration:'none'}} to="/">The Hundred</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  )
}
export default Header;