import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './lib/store';
import './styles/App.css';
import { HomeContainer } from './container/AppContainer';



console.log(store.getState())
// const unsubscribe = store.subscribe(() => console.log(store.getState()))
//store.dispatch(addtoCart(5, {name:"kiwi"}))




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);
