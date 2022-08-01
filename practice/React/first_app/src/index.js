import App from './App';

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// const text = 'Hello world';
// const elemJSX = <h2>Hello world!</h2>;
// const elem = React.createElement('h1', {className: 'fuuu'}, 'Hello world! Without JSX');
// const trickyElem = (
//   <div>
//     <h2 className='test '>Текст: {text} {10+5}</h2>
//     <label htmlFor="name"></label>
//     <input type="text" name='name'/>
//     <button>Click</button>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);