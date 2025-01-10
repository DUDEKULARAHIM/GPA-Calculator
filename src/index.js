// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Use 'react-dom/client' for React 18
import App from './App';
import './index.css'; // Your CSS file for styles
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Import service worker registration
import reportWebVitals from './reportWebVitals';

// Create the root of the app and render it
const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root element for React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register the service worker to enable PWA
serviceWorkerRegistration.register();

// Log performance metrics (optional)
reportWebVitals();
