import React from 'react';
import Row from './Row';

const Table = () => {
    return (
        <div>
             <table>
        <tr>
          <th width="200">Product</th>
          <th width="80">Reference</th>
          <th width="150">Price</th>
          <th width="150">Quantity</th>
          <th width="200">Total</th>
        </tr>
        <Row
      </table>
        </div>
    );
};

export default Table;