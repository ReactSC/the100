import React, { useContext } from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SettingContext } from '../store/contexts';


// JSS Code
const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
})

const Footer = () => {
  const classes = useStyles();
  const theme = useContext(SettingContext).theme;

  return (
    <AppBar
      className={classes.appBar}
      style={{ background: theme.navbar }}
    >
      <Typography
        className="text-center py-2"
        variant="h5"
        style={{ color: theme.color }}
      >
        by:
        <a
          style={{
            textDecoration: "none",
            color: theme.color,
            marginLeft: 10
          }}
          href="//facebook.com/schoolwab"
          target="_blank"
          rel="noopener noreferrer"
        >
          SChoolWab
        </a>
      </Typography>
    </AppBar>
  );
}
export default Footer;