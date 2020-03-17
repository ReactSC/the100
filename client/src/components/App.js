import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
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
        <Container style={{margin:'75px auto'}}>
          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/faq" exact component={FAQ} />
            <Route path="/settings" exact component={Settings} />
            <Route path="/f" exact component={Favourite} />
            <Route path="/v/:id" exact component={Single} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Container>
      <Footer />
    </Fragment>
  );
}

export default App;
