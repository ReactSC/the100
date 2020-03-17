import React, { Fragment } from 'react';

import { AppBar, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// JSS Code
const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    background: '#581D8D',
  },
}))

const Footer = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Typography className="text-center py-2" variant="h5">
          by: <Link className="text-light" style={{textDecoration: 'none'}} href="//facebook.com/schoolab">SChoolWab</Link>
        </Typography>
      </AppBar>
    </Fragment>
  )
}
export default Footer;