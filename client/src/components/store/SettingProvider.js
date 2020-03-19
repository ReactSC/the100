import React, { useState} from 'react';

// import Contexts
import { SettingContext, initTheme } from './index';


const SettingProvider = props => {
  // declere Initial
  const defaultTheme = {
    card: '#491578',
    paper: '#491578',
    navbar: '#491578',
    body: '#762CB7',
    button: '#491578',
    color: '#fff',
    colorSecondary: '#aaa'
  }

  // declere State
  const [state, setState] = useState({
    theme: localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme"))
      : defaultTheme
  });

  // change Theme Function
  const cngTheme = data => {
    setState({
      ...state,
      theme: data
    })
  }

  // create a variable to pass a props in MainContext.Provider
  const access = {
    initTheme,
    theme: state.theme,
    cngTheme,
  }

  return (
    <SettingContext.Provider value={ access } >
      { props.children }
    </SettingContext.Provider>
  )
}
export default SettingProvider;