import React from 'react';
import Card from './Card';

const List = props => {
  const {products} = props
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