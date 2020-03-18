import React from 'react';

// import Providers and Contexts
import {
  MainContext,
  PersonProvider,
  SettingProvider,
  FevProvider
} from './index';

const Provider = props => {

  return (
    <MainContext.Provider>
      <PersonProvider>
        <SettingProvider>
          <FevProvider>
            { props.children }
          </FevProvider>
        </SettingProvider>
      </PersonProvider>
    </MainContext.Provider>
  )
}
export default Provider;