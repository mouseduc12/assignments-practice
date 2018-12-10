import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProviderState from "./ProviderState"


ReactDOM.render(
    <ProviderState>
        <App />
    </ProviderState>, document.getElementById('root'));
