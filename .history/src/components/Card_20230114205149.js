import React from 'react';


const Card = props => {
  const {fruit} = props
  return (
    <div className="col-sm-4">
    <div className="card">
    return  <img
        width="170"
        height="170"
        src={`assets/0/${fruit.image}`}
        C:\Users\Ludo\Desktop\my\src\assets\0
        alt={fruit.name}
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