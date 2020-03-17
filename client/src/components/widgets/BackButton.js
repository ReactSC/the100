import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack } from '@material-ui/icons';

const useStyle = makeStyles({
  root: {
    position: 'fixed',
    top: 75,
    left: 0,
    background: '#581D8D',
    color: '#fff'
  }
})

const BackButton = () => {
  const classes = useStyle();
  const history = useHistory();

  const clickToBack = () => {
    history.goBack()
  }


  return (
    <Button
      variant="contained"
      className={classes.root}
      onClick={clickToBack}>
      <ArrowBack />
    </Button>
  )
}
export default BackButton;