import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import './index.css';
import { mergeStyles } from '@uifabric/styling';
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

// Inject some global styles
mergeStyles({
  selectors: {
    ':global(body), :global(html), :global(#app)': {
      margin: 0,
      padding: 0,
      height: '100vh',
    },
  },
});

ReactDOM.render(
  <Router basename='/Team:SEU-Nanjing-China'>
    <App />
  </Router>,
  document.getElementById('root')
);
