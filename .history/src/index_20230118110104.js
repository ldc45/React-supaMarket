import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './lib/store';
import App from './App';
import './styles/App.css';
import { addToCart } from './lib/action';


console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(addToCart({name:"citrons"},2))

unsubscribe()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider >
      <Appstore = {store} />
    </Provider>
  </React.StrictMode>
);
