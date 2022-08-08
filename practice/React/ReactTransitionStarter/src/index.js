import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppTransition from './AppTransition';
import AppCssTransition from './AppCssTransition'

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <>
    {/* <AppTransition /> */}
    <AppCssTransition />
  </>,
  document.getElementById('root')
);


