import React from 'react';
import ReactDOM from 'react-dom'; // mobile version - sam
import 'semantic-ui-css/semantic.min.css'; // adding semantic component - sam
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // remove <React.StrictMode> to prevent 3rd-party to stop us 
  // from building the application - sam
    <App />,
  document.getElementById('root') // js - sam
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
