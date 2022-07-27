import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const elemJSX = <h2>Hello world!</h2>;

const elem = React.createElement('h1', {className: 'fuuu'}, 'Hello world! Without JSX');

const trickyElem = (
  <div>
    <h2>Hello world</h2>
    <input type="text" />
    <button></button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  [elemJSX, elem]
);