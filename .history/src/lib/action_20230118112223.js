/**
 * actions types
 */

export const actions = {
  ADD_TO_CART : "ADD_TO_CART",
  UPDATE_CART : "UPDATE_CART",
  REMOVE_FROM_CART : "REMOVE_FROM_CART" 
}

/**
 *  actions creator
 */

const uid = () => Math.random().toString(34).slice(2)
export function addToCart(quantity, product){
  return {
    type: actions.ADD_TO_CART,
    payload : {id:uid(), quantity: quantity, details: product}
  }
}

export function updateCart(product, quantity){
  return {
    type: actions.UPDATE_CART,
    payload : {product: product, quantity: quantity,}
  }
}

export function removeFromCart(product){
  return {
    type: actions.REMOVE_FROM_CART,
    payload : product
  }
}