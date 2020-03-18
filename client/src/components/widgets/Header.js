import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GitHub, Settings, Star } from '@material-ui/icons';

import { SettingContext } from '../store/contexts';

// JSS Code
const useStyles = makeStyles({
  appBar: {
    top: 0,
  },
  menuIcons: {
    marginLeft: 'auto',
  }
})

const Header = () => {
  const classes = useStyles();
  const theme = useContext(SettingContext).activeTheme

  return (
    <AppBar
      position="fixed"
      style={{ background: theme.bgPrimary }}
      className={classes.appBar}>
      <Toolbar>
        <Typography variant="h5">
          <Link
            style={{
              textDecoration: 'none',
              color: theme.color,
            }}
            to="/">The Hundred
          </Link>
        </Typography>

        <div className={ classes.menuIcons }>
          <Link to="/f">
            <IconButton style={{ color: theme.color }} >
              <Star />
            </IconButton>
          </Link>

          <Link to="/settings">
            <IconButton style={{ color: theme.color }} >
              <Settings />
            </IconButton>
          </Link>

          <Link to="//github.com/reactsc/the100">
            <IconButton edge="end" style={{ color: theme.color }} >
              <GitHub />
            </IconButton>
          </Link>
        </div>

      </Toolbar>
    </AppBar>
  )
}
export default Header;