import React, { useState, useEffect } from 'react';

// import Contexts
import { PersonCentext } from './index';

const PersonProvider = props => {

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
    person: state
  }

  return (
    <PersonCentext.Provider value={access}>
      {props.children}
    </PersonCentext.Provider>
  )
}
export default PersonProvider;