import React, { useState } from 'react';

// import Contexts
import { SettingContext } from './contexts';

const SettingProvider = props => {

 // create a default theme
  const theme = {
    default: {
      bgPrimary: '#491578',
      bgSecondary: '#762CB7',
      color: '#fff',
    },
    light: {
      bgPrimary: '#491578',
      bgSecondary: '#762CB7',
      color: '#fff',
    },
    dark: {
      bgPrimary: '#491578',
      bgSecondary: '#762CB7',
      color: '#fff',
    }
  }

  // declere State
  const [state, setState] = useState({
    theme,
    activeTheme: theme.default,
  });


  // create a variable to pass a props in MainContext.Provider
  const access = {
    theme: state.theme,
    activeTheme: state.activeTheme,
  }

  return (
    <SettingContext.Provider value={access}>
      {props.children}
    </SettingContext.Provider>
  )
}
export default SettingProvider;