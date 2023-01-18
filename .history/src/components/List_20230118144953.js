import React from 'react';
import Card from './Card';

const List = props => {
  const {grocery, updateCart} = props

  return (
    <div className="col-sm">
    <div className="row">
{grocery.map((product,index) => <Card key={index} product={product}  updateCart={updateCart}/>)}

    </div>
  </div>
  );
};

export default List;