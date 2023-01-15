import React from 'react'
import Modal from './Modal'

const Card = (props) => {
  const { product } = props
  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          width="170"
          height="170"
          src={`../assets/${product.category}/${product.image}`}
          alt={product.name}
        />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4>{product.name}</h4>
            </div>
            <div className="col-sm-6">
              <p>
                €{product.price}/{product.unit}
              </p>
              <button className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#{product}">view product</button>
            </div>
          </div>
        </div>
      </div>
     <Modal product = {product}/>
    </div>
  )
}

export default Card
