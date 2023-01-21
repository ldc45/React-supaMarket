import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './lib/store';
import './styles/App.css';
import { AppContainer} from './container/AppContainer';



// Log the initial state
console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))
//store.dispatch(addtoCart({name: "citron"}, 2))
//store.dispatch(addtoCart({name: "kiwi"}, 5))
unsubscribe()



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>
);
