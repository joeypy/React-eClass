import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Home from './components/Home/Home';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


