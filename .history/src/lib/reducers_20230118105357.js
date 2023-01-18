import { actions } from "./action";
// à revoir
const initialState ={
  products : []
}

export default function onlineStoreApp(state = initialState, action){
   switch (action.type) {
      case ADD_TO_CART: 
      return Object.assign({}, state, {items: [...state.items, action.payload]});
      case UPDATE_CART:
        return Object.assign({}, state, {
          items: state.items.map(item => {
            return item.id === action.payload.item.id
              ? Object.assign({}, item, {
                  quantity: action.payload.quantity
                })
              : item;
          })
        });
      case REMOVE_FROM_CART:
        return Object.assign({}, state, {
          items: state.items.filter(item => {
            return item.id != action.payload.id;
          })
        });
    default:
      return state
  }
}