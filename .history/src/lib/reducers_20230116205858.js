import { actions } from "./action";

const initialState ={
  products : []
}

function onlineStoreApp(state = initialState, action){
switch(action.type){
  case actions.ADD_TO_CART:
  case actions.UPDATE_CART:
  case actions.REMOVE_FROM_CART:
}
}