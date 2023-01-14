import React from 'react';
import citron from '../assets/0/citron.png'

const Card = props => {
  const {fruit} = pro
  return (
    <div className="col-sm-4">
    <div className="card">
      <img
        width="170"
        height="170"
        src= {citron}
        alt="citron"
      />
      <div className="card-body">
        <div className="row">
          <div className="col-sm-6">
            <h4>Citron</h4>
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