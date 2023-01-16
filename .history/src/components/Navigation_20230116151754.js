import React from 'react'

const Navigation = ({ filter, setFiltering, count }) => {
  return (
    <nav className=" orange navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid justify-content-between">
        < className="navbar-brand crimson" href="/">
          <i className="fas fa-shopping-cart me-1"></i>Supamarket
        </>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex mt-2 ms-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                setFiltering(e.target.value.length > 0)
                filter(e.target.value)
              }}
            ></input>
          </form>    
          <div className='menu-right mx-3'>
          <i class="fa-solid fa-basket-shopping fa-2x crimson"></i>
          <span class="badge rounded-pill bg-success">{count}</span>
        </div>
        </div>
    
      </div>
    </nav>
  )
}

export default Navigation
