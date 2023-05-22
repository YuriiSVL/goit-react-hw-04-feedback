import React from 'react';
import ReactDOM from 'react-dom/client';
// import { AppOld } from 'components/App';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppOld /> */}
    <App />
  </React.StrictMode>
);
