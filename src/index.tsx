import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router';

import './index.css';

import Header from './components/Header';
import Loading from './components/Loading';
import Footer from './components/Footer';
import { pages } from './pages';

const App: React.FunctionComponent = () => {
  return (
    <div id='App'>
      <Header />
      <Suspense fallback={<Loading />}>
        {
          pages
        }
      </Suspense>
      <Footer />
    </div>
  );
};

ReactDOM.render(
  <Router basename='/Team:SEU-Nanjing-China'>
    <App />
  </Router>,
  document.getElementById('root')
);
