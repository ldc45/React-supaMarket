import { actions } from "./action";
// à revoir
const initialState ={
  items : [{id:1, quantity:2, details: {name: "kiwi"}}]
}

export default function onlineStoreApp(state = initialState, action){
  switch(action.type) {
    case actions.ADD_TO_CART : return Object.assign({}, state, { items : [...state.items, action.payload]});
    case actions.UPDATE_CART : 
    console.log(`item : ${action.payload.id}`)
    return Object.assign({}, state, {
        items : state.items.map(item => {
            return item.id === action.payload.id ?
            Object.assign({}, item, {
                quantity: action.payload.quantity
            }) : item;
        }) 
    })
    case actions.REMOVE_FROM_CART : 
    console.log(state.items)
    return Object.assign({}, state,  {
        items : state.items.filter(item => {
            return item.id != action.payload
        })
    })
    default:
      return state
  }
}