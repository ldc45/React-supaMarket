import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../components/Navigation';
import Table from '../components/Table';


const Cart = () => {
  const products = useSelector(state => state.items)
  const [subTotal, setSubTotal] = useState(0.00)
  const [total, setTotal] = useState(0.00)
  const shipping = 10.00
  
  return (
    <div className='container'>
      <Navigation/>
    <div className="row">
    <div className="col-sm cart">
      <Table products={/>
    </div>
    <div className="col-sm-3 order-summary">
      <ul className="list-group">
        <li className="list-group-item">Order Summary</li>
    
        <li className="list-group-item">
          <ul className="list-group flex">
            <li className="text-left">Subtotal</li>
            <li className="text-right">€{subTotal}</li>
          </ul>
          <ul className="list-group flex">
            <li className="text-left">shipping</li>
            <li className="text-right">€{shipping.toFixed(2)}</li>
          </ul>
          <ul className="list-group flex">
            <li className="coupon crimson">
              <small>  Add Coupon Code</small>
            </li>
          </ul>
        </li>
    
        <li className="list-group-item ">
          <ul className="list-group flex">
            <li className="text-left">Total</li>
            <li className="text-right">€0.00</li>
          </ul>
        </li>
      </ul>
      <button
        type="button"
        className="btn btn-light btn-lg btn-block checkout bg-crimson"
        disabled={true}
      >
        <a href="/" className="white">
          Checkout
        </a>
      </button>
    </div>
    </div></div>
    
  );
};

export default Cart;