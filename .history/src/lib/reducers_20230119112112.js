import { actions } from "./action";
// à revoir
const initialState ={
  products : []
}

export default function onlineStoreApp(state = initialState, action){
  switch(action.type){

    case actions.ADD_TO_CART: return Object.assign({}, state, {products: [...state.products, action.payload]});
    case actions.UPDATE_CART : 
        console.log(`product : ${action.payload.id}`)
        return Object.assign({}, state, {
            products : state.products.map(product => {
                return product.id === action.payload.id ?
                Object.assign({}, product, {
                    quantity: action.payload.quantity
                }) : product;
            }) 
        });

    case actions.REMOVE_FROM_CART: return Object.assign({}, state, {
      products: state.products.filter(product =>{
        return product.id !== action.payload;
       })
    });
    case actions.SAVE_CART:
    default:
      return state
  }
}