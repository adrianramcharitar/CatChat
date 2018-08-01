import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import store from './data/store';
import registerServiceWorker from './shared/registerServiceWorker';
import './index.css';



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

registerServiceWorker();
