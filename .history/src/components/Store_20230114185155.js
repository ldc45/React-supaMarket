import React from 'react';
import List from './List';
import SideMenu from './SideMenu';

const Menu = () => {
  return (
    <div className='container'>
      <div className="row">
     <SideMenu/>
     <div className="col-sm">
    <div className="row">
     <List/>  
     </div>
      </div>
    </div>
  );
};

export default Menu;