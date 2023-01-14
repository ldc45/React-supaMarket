import React from 'react';
import Card from './Card';

const List = props => {
  const {products, categor} = props
  const fruits =products[4]   
  return (
    <div className="col-sm">
    <div className="row">
{fruits.map((fruit,index) => <Card key={index} fruit={fruit}/>)}

    </div>
  </div>
  );
};

export default List;