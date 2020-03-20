import React, { useContext, Fragment } from "react";
// import { useHistory } from 'react-router-dom';
import { Formik, Form  } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button, Typography } from '@material-ui/core';

import { SettingContext } from '../store';
import { InputField } from "../widgets";
import { authFn } from '../util';


const useStyles = makeStyles({
  root: {
    display: 'grid',
  }
})


const LoginCard = () => {
  const theme = useContext(SettingContext).theme;
  const classes = useStyles();
  // const history = useHistory();

  const initialValues = {
    username: '',
    password: ''
  }
  
  const AddNewSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Too Short!')
      .required('Required'),
    password: Yup.string()
      .min(3, 'Too Short!')
      .required('Required')
  })


  const submitHandler = value => {
    authFn(value)
    // history.push('/dashboard');
  }

  return (
    <Fragment>
      <Typography variant="h5" style={{ color: theme.color }}>
        Add or Edit Person Data
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={AddNewSchema}
        onSubmit={submitHandler}
      >
        {isValid => {
          return (
            <Form className={classes.root}>
              <InputField
                style={{ color: theme.color }}
                name="username"
                type="text"
                label="UserName"
                required
              />
              <InputField
                style={{ color: theme.color }}
                name="password"
                type="password"
                label="Password"
                required
              />
              <Button
                disabled={!isValid}
                className="mt-3"
                variant="contained"
                type="submit"
                fullWidth
                style={{
                  background: theme.body,
                  color: theme.color
                }}
              >
                Login
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Fragment>
  );
}
export default LoginCard;