import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

// import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { SettingContext } from './store/contexts';

// import Pages
import { Home, Single, Favourite, Settings, FAQ, About } from './pages';

// import Header & Footer from Widgets
import { Header, Footer } from './widgets';

const App = () => {
  const theme = useContext(SettingContext).theme;

  return (
    <div style={{background: theme.body, minHeight: '100vh'}}>
      <Header />
      <Container style={{ paddingTop:75, paddingBottom:75 }}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/faq" component={FAQ} />
          <Route path="/settings" component={Settings} />
          <Route path="/f" component={Favourite} />
          <Route path="/v/:id" component={Single} />
          <Route path="/the100" component={Home} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}
export default App;
