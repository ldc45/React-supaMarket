import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { updateCart, removeFromCart } from '../lib/action';

const Row = (props) => {

  const {quantity, details} = props.product
  const product = details
  const [localCartQty, setlocalCartQty] = useState(quantity);
  
  const dispatch = useDispatch()
  const update = (product,quantity) =>{
    dispatch(updateCart(product,quantity))
  }

  const remove = (product) =>{
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
              onClick={()=> {
                setlocalCartQty(localCartQty> 1 ? localCartQty- 1 : 1 ) 
                update(product,localCartQty)
              }}
              >
              -
            </button>
            <span className="btn btn-light">{localCartQty}</span>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={()=> {
                setlocalCartQty(localCartQty+1 ) 
                update(product,localCartQty)
              }}
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
            onClick={()=>{remove({product})
          }}
            >
            X
          </button>
        </td>
      </tr>
    );
};

export default Row;