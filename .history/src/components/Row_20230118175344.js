import React, { useState, useDispatch } from 'react';
import { updateCart } from '../lib/action';

const Row = (props) => {

  const {quantity, details} = props.product
  const 
  const [localCartQty, setlocalCartQty] = useState(quantity);
  
  const dispatch = useDispatch()
  const update = (product,quantity) =>{
    dispatch(updateCart(product,quantity))
  }

    return (
        <tr>
        <td>
          <img
            width="70"
            height="70"
            src={`../assets/${details.category}/${details.image}`}
            alt={details.name}
          />
        </td>
        <td>{details.ref}</td>
        <td>{details.price}</td>
        <td>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={()=> {
                setlocalCartQty(localCartQty> 1 ? localCartQty- 1 : 1 ) 
                update(details,localCartQty)
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
                update(details,localCartQty)
              }}
              >
              +
            </button>
          </div>
        </td>
        <td>€{(quantity * details.price).toFixed(2)}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger remove">
            X
          </button>
        </td>
      </tr>
    );
};

export default Row;