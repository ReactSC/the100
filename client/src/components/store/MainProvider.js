import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// import Contexts
import { MainContext } from './contexts';

const Provider = props => {
  // const location = useLocation();
  // declere State
  const [state, setState] = useState([]);

  // Fetch Data into fake API
useEffect(() => {
  fetch('https://uinames.com/api/?amount=100&ext')
    .then(res => res.json())
    .then(f => setState(f))
}, [])


  // create a variable to pass a props in MainContext.Provider
  const access = {
    state
  }

  return (
    <MainContext.Provider value={ access }>
      { props.children }
    </MainContext.Provider>
  )
}

export default Provider;