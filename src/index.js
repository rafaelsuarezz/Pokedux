import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore} from 'redux';
import { capitalizeFirstLetter, logger, sortAlphabetically } from './Middlewares/index'
import { thunk } from 'redux-thunk';
import App from './App';
import './index.css';
import { rootReducer } from './reducers/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composeEnhancers = composeAlt(applyMiddleware(thunk, logger, capitalizeFirstLetter, sortAlphabetically))


const store = createStore(rootReducer, composeEnhancers)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

