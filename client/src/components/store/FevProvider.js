import React, { useState } from 'react';

// import Contexts
import { FevContext } from './index';

const FevProvider = props => {

  // declere State
  const [state, setState] = useState();

  // create a variable to pass a props in MainContext.Provider
  const access = {

  }

  return (
    <FevContext.Provider value={access}>
      {props.children}
    </FevContext.Provider>
  )
}
export default FevProvider;