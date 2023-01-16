import { actions } from "./action";

const initialState ={
  products : []
}

function onlineStoreApp(state = initialState, action){
switch(action.type){
  case actions.ADD_TO_CART: return Object.assign({}, state, {producs: [...state.items, actions.payload]})
  case actions.UPDATE_CART: return Object.assign({}, state, {
    producs: state.products.map(product =>{})
  case actions.REMOVE_FROM_CART:
}
}