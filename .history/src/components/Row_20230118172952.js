import React, { useState } from 'react';

const Row = (props) => {

  const {quantity, details} = props.product
  const [qty, setQty] = useState(quantity);
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
              >
              -
            </button>
            <span className="btn btn-light">{qty}</span>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={()=> setQty(qty> 1 ? qty- 1 : 1 )}
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