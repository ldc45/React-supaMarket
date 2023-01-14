import React from 'react';


const Card = props => {
  const {fruit} = props
  console.log(fruit).
  return (
    <div className="col-sm-4">
    <div className="card">
      <img
        width="170"
        height="170"
        src={`../assets/${fruit.category}/${fruit.image}`}
        alt="citron"
      />
      <div className="card-body">
        <div className="row">
          <div className="col-sm-6">
            <h4>{fruit.name}</h4>
          </div>
          <div className="col-sm-6">
            <p>
              €2.99/unit
            </p>
            <button className="btn btn-warning btn-sm">view product</button>
          </div>
        </div>
      </div>
    </div>
    {/* modal */}
  </div>
  );
};

export default Card;