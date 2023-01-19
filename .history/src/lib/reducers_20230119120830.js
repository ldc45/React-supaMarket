import { actions } from "./action";
// à revoir

const saveToLocalStorage = object => {
  // variable définie par Javascript (key,value)
  localStorage.setItem("products", JSON.stringify(object))
}
const initialState ={
  products : JSON.parse(localStorage.getItem("products") !== null ? JSON.parse(localStorage.getItem("products))
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
      saveToLocalStorage(action.payload.product) 
    return state;
    default:
      return state
  }
}