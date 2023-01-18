import { actions } from "./action";
// à revoir
const initialState ={
  product : [{id:1, quantity: 2, details}]
}

export default function onlineStoreApp(state = initialState, action){
  switch(action.type){

    case actions.ADD_TO_CART: return Object.assign({}, state, {products: [...state.products, actions.payload]});

    case actions.UPDATE_CART: return Object.assign({}, state, {
      products: state.products.map(product =>{
        return product.id === actions.payload.product.id ?
        Object.assign({}, state, {
          quantity : action.payload.quantity
        }) : product;
      })
    });

    case actions.REMOVE_FROM_CART: return Object.assign({}, state, {
      products: state.products.filter(product =>{
        return product.id !== actions.payload.id;
       })
    });
    default:
      return state
  }
}