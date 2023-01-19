import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../components/Navigation';
import Table from '../components/Table';


const Cart = () => {
  const { saveLocalStorage} = props
  const products = useSelector(state => state.products)
  const [subTotal, setSubTotal] = useState(0.00)
  const [total, setTotal] = useState(0.00)
  const shipping = 10.00
  useEffect(() => {
    let totals = products.map(product => {
      return product.quantity * product.details.price
    })
    setSubTotal(totals.reduce((product1, product2) => product1 + product2, 0))
    setTotal(subTotal + shipping)
    saveLocalStorage(products)
    // console.log(`Subtotal:  €${subTotal} `)
    // console.log(`You have ${products.length} in your cart`)
  },[products, subTotal, total])
  
  return (
    <div className='container'>
      <Navigation/>
    <div className="row">
    <div className="col-sm cart">
      <Table products={products}/>
    </div>
    <div className="col-sm-3 order-summary">
      <ul className="list-group">
        <li className="list-group-product">Order Summary</li>
    
        <li className="list-group-product">
          <ul className="list-group flex">
            <li className="text-left">Subtotal</li>
            <li className="text-right">€{subTotal.toFixed(2)}</li>
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
    
        <li className="list-group-product ">
          <ul className="list-group flex">
            <li className="text-left">Total</li>
            <li className="text-right">€{subTotal === 0.00 ? '0.00' :total.toFixed(2)}</li>
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