/**
 * actions types
 */

export const actions = {
  ADD_TO_CART : "ADD_TO_CART",
  UPDATE_CART : "UPDATE_CART",
  REMOVE_FROM_CART : "REMOVE_FROM_CART" 
}

/**
 *  actions créator
 */

const uid = () => Math.random().toString(34).slice(2)
export function addtoCart(product, quantity){
  return {
    type: actions.ADD_TO_CART,
    payload : {id:uid(), quantity: quantity, details: product}
  }
}

export function updateCart(id, quantity){
  return {
    type: actions.UPDATE_CART,
    payload : {id:id, quantity: quantity,}
  }
}

export function removeFromCart(id){
  return {
    type: actions.REMOVE_FROM_CART,
    payload : id
  }
}