import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles.css"
import ProviderAxios from "./ProviderAxios"


ReactDOM.render(
    <ProviderAxios>
        <App />
    </ProviderAxios>
    , document.getElementById('root'));
