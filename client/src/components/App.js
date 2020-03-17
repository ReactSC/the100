import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';

// import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// import Pages
import { Home, Single, Favourite, Settings, FAQ, About } from './pages';

// import Header & Footer from Widgets
import { Header, Footer } from './widgets';

function App() {
  return (
    <Fragment>
      <Header />
      <Container style={{ margin: "75px auto" }}>
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
    </Fragment>
  );
}
export default App;
