import React from 'react';

const Navigation = ({filter, setFiltering}) => {
  return (
    <nav className=" orange navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container-fluid d-flex space ">
      <a className="navbar-brand crimson" href="/"> <i className="fas fa-shopping-cart me-1"></i>Supamarket</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="d-flex mt-2">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
          onChange={(e) => {
            setFiltering(e.target.value.length > 0)
             filter(e.target.value)} }></input>
             </form>
      </div>
    </div>
  </nav>
      );
    };

export default Navigation;