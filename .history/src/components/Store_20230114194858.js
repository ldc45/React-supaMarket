import React from 'react';
import List from './List';
import SideMenu from './SideMenu';
impor

const Menu = () => {
  return (
    <div className='container'>
      <div className="row">
     <SideMenu/>
     <List/>  
      </div>
    </div>
  );
};

export default Menu;