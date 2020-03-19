import React, { useState } from 'react';

// import Contexts
import { FevContext } from './index';

const FevProvider = props => {
  // declere State
  const [state, setState] = useState({
    fev: localStorage.fev ? JSON.parse(localStorage.getItem('fev')) : []
  });

  const setFev = id => {
    setState({ fev: [...state.fev, id] });
    localStorage.setItem('fev', JSON.stringify([...state.fev, id]))
  }

  const rmFev = id => {
    console.log('remove' + id )
    // const newFev = state.fev.filter(i => i !== id);
    // setState({fev: [ newFev ] })
    // localStorage.setItem('fev', JSON.stringify([newFev]))
  }

  // create a variable to pass a props in MainContext.Provider
  const access = {
    fev: state.fev,
    setFev,
    rmFev,
  }

  return (
    <FevContext.Provider value={access}>
      {props.children}
    </FevContext.Provider>
  )
}
export default FevProvider;