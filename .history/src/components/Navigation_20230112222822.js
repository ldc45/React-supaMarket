import React from 'react';

const Navigation = () => {
  return (
    <nav Name="navbar navbar-expand-lg navbar-light bg-light">
    <div Name="container-fluid">
      <a Name="navbar-brand" href="#">Navbar</a>
      <button Name="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span Name="navbar-toggler-icon"></span>
      </button>
      <div Name="collapse navbar-collapse" id="navbarSupportedContent">
        <ul Name="navbar-nav me-auto mb-2 mb-lg-0">
          <li Name="nav-item">
            <a Name="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li Name="nav-item">
            <a Name="nav-link" href="#">Link</a>
          </li>
          <li Name="nav-item dropdown">
            <a Name="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul Name="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a Name="dropdown-item" href="#">Action</a></li>
              <li><a Name="dropdown-item" href="#">Another action</a></li>
              <li><hr Name="dropdown-divider"></li>
              <li><a Name="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li Name="nav-item">
            <a Name="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form Name="d-flex">
          <input Name="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button Name="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
      );
    };

export default Navigation;