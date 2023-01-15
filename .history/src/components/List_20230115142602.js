import React from 'react';
import Card from './Card';

const List = props => {
  const {grocery, category} = props
  const products =grocery[category]   
  return (
    <div className="col-sm">
    <div className="row">
{products.map((product,index) => <Card key={index} product={product}/>)}

    </div>
  </div>
  );
};

export default List;