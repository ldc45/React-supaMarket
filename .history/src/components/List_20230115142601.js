import React from 'react';
import Card from './Card';

const List = props => {
  const {grocery, category} = props
  const products =grocery[category]   
  return (
    <div className="col-sm">
    <div className="row">
{products.map((produ,index) => <Card key={index} produ={produ}/>)}

    </div>
  </div>
  );
};

export default List;