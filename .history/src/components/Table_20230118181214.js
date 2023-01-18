import React, { useEffect } from 'react';
import Row from './Row';
import { useDispatch, useSelector } from 'react-redux';

const Table = () => {
  const products = useSelector(state => state.products)

  useEffect(()=> {
    console.log(`You have ${products.length} in your cart`)
  })
    return (
        <div>
             <table>
              <thead>
                <tr>
          <th width="200">Product</th>
          <th width="80">Reference</th>
          <th width="150">Price</th>
          <th width="150">Quantity</th>
          <th width="200">Total</th>
        </tr>
              </thead>
        
       {products.map(product => {
        return (<Row product={product}/>)
       })}
      </table>
        </div>
    );
};

export default Table;