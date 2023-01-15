import React from 'react';
import Card from './Card';

const List = props => {
  const {grocery, category} = props
  const produc =grocery[category]   
  return (
    <div className="col-sm">
    <div className="row">
{produc.map((fruit,index) => <Card key={index} fruit={fruit}/>)}

    </div>
  </div>
  );
};

export default List;