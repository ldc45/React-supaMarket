import React, { useContext, useEffect, useState } from 'react';
import { UserProfileContext } from '../lib/UserProfileContext';

const Checkout = () => {
  const [isValid, setValid] = useState(false)
  const value = useContext(UserProfileContext)
  const { 
    firstName,
    lastName,
    email,
    address,
    zipCode,
    city
        }=value
  const validate = () =>{
    let errors =[]
    const inputs = document.querySelectorAll(".form-control")
    inputs.forEach(input =>{
      !input.value ? errors.push(input) : errors.length && errors.pop()
    })
    setValid(!errors.length)
  }
  useEffect(()=>{
    validate()
  })

    return (
    <div>
       <div className="col-sm-6 offset-3">
          <h2>Checkout</h2>
          <br />
          <form>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  property=""
                  defaultValue="" />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  property=""
                  defaultValue=""
                  onChange={()=>{
                    setUserProfileContext(lastName:et)
                  }}/>
              </div>
            </div>
            <br />
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email address"
                property=""
                defaultValue=""/>
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Address"
                property=""
                defaultValue="" />
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Postal Code"
                  property=""
                  defaultValue="" />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  property=""
                  defaultValue="" />
              </div>
            </div>
            <br />
        
            <a href="/" className= {`${!isValid && 'disabled' }checkout white btn btn-light btn-lg btn-block bg-crimson`}>
                Confirm
              </a>
          </form>
        </div>
    </div>
  );
};

export default Checkout;