import React, { useContext } from 'react';
import { AppBar, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SettingContext } from '../store/contexts';


// JSS Code
const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
    background: '#581D8D',
  },
})

const Footer = () => {
  const classes = useStyles();
  const theme = useContext(SettingContext).activeTheme;

  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      style={{ background: theme.bgPrimary }}
    >
      <Typography className="text-center py-2" variant="h5">
        by: 
        <Link
          style={{
            textDecoration: 'none',
            color: theme.color,
            marginLeft: 10
          }}
          href="//facebook.com/schoolwab">
          SChoolWab
        </Link>
      </Typography>
    </AppBar>
  )
}
export default Footer;