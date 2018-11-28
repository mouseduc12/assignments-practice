import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from "./App"
import ThemeProvider from "./ThemeProvider"

ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById('root'));

