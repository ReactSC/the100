import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack } from '@material-ui/icons';

import { SettingContext } from '../store';

const useStyle = makeStyles({
  root: {
    position: 'fixed',
    top: 75,
    left: 0,
  }
})

const BackButton = () => {
  const classes = useStyle();
  const history = useHistory();
  const theme = useContext(SettingContext).theme;

  const clickToBack = () => {
    history.goBack()
  }


  return (
    <Button
      variant="contained"
      className={classes.root}
      style={{ background: theme.button, color: theme.color }}
      onClick={clickToBack}>
      <ArrowBack />
    </Button>
  )
}
export default BackButton;