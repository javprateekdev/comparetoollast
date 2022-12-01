import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-s7d85g06761xjd2e.us.auth0.com"
      clientId="Zp8EV6txEIE58Qe3mJ29CI8tJklNrZ9f"
      redirectUri={window.location.origin}
    >
      <App/>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

