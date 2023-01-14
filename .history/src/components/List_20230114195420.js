import React from 'react';
import Card from './Card';

const List = props => {
  const {data} = props
  return (
    <div className="col-sm">
    <div className="row">
      {data}
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