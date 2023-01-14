import React from 'react';
import Card from './Card';
import List from './List';
import SideMenu from './SideMenu';

const Menu = () => {
  return (
    <div className='container'>
      <div className="row">
     <SideMenu/>
        <div className="col-sm">
     <List/>
        </div>
      </div>
    </div>
  );
};

export default Menu;