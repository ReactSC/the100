import React, { useState} from 'react';

// import Contexts
import { SettingContext, initTheme } from './index';


const SettingProvider = props => {

  // declere State
  const [state, setState] = useState({
    theme: localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme"))
      : initTheme.default
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