/**
 * actions types
 */

const actions = {
  ADD_TO_CART : "ADD_TO_CART",
  UPDATE_CART : "UPADTE_CART",
  REMOVE_FROM_CART : "REMOVE_FROM_CART" 
}


const uid = Math.random().toString(34).slice(2)
function addToCart(product, quantity){
  return {
    type: actions.ADD_TO_CART,
    payload : {id:uid(), quantity: quantity, details: product}
  }
}
