import React from 'react';
import Card from './Card';

const List = props => {
  const {products} = props
  const fruits =products[0]   

  return (
    <div className="col-sm">
    <div className="row">

    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
  </div>
  );
};

export default List;