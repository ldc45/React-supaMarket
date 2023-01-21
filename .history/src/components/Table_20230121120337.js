import Row from './Row';
import React from 'react';

const Table = ({products}) => {
 
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
        <tbody>
           {products.map(product => {
        return (<Row product={product}/>)
       })}
        </tbody>
      
      </table>
        </div>
    );
};

export default Table;