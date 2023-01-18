/**
 * actions types
 */

export const actions = {
  ADD_TO_CART : "ADD_TO_CART",
  UPDATE_CART : "UPADTE_CART",
  REMOVE_FROM_CART : "REMOVE_FROM_CART" 
}

/**
 *  actions créator
 */

const uid = () => Math.random().toString(34).slice(2)
export function addToCart(item, quantity){
  return {
    type: actions.ADD_TO_CART,
    payload : {id:uid(), quantity: quantity, details: item}
  }
}

export function updateCart(item, quantity){
  return {
    type: actions.UPDATE_CART,
    payload : {item: item, quantity: quantity,}
  }
}

export function removeFromCart(item){
  return {
    type: actions.REMOVE_FROM_CART,
    payload : item
  }
}