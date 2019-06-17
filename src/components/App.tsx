import React from 'react';
import { Route, Switch } from 'react-router';

import Header from './Header';
import Home from './Home';
import Loading from './Loading';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <div id='App'>
      <Header />
      <Loading />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
