import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { updateCart, removeFromCart } from '../lib/action';

const Row = (props) => {

  const {id,quantity, details} = props.product
  const product = details
  const [localCartQty, setlocalCartQty] = useState(quantity);
  
  const dispatch = useDispatch()

  const update = (action) => {
    if (action === 'increment') { setQty(qty + 1) }
    if (action === 'decrement') { setQty(qty - 1) }
  }

  const remove = product =>{
    dispatch(removeFromCart(product))
  }

    return (
        <tr>
        <td>
          <img
            width="70"
            height="70"
            src={`../assets/${product.category}/${product.image}`}
            alt={product.name}
          />
        </td>
        <td>{product.ref}</td>
        <td>{product.price}</td>
        <td>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                if (localCartQty > 1) {update('decrement') }
              }}
              >
              -
            </button>
            <span className="btn btn-light">{localCartQty}</span>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() =>  {update('increment')}}
              >
              +
            </button>
          </div>
        </td>
        <td>€{(quantity * product.price).toFixed(2)}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger remove"
            onClick={()=>{remove(id)
          }}
            >
            X
          </button>
        </td>
      </tr>
    );
};

export default Row;