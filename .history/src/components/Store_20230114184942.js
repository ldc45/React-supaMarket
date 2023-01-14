import React from 'react';
import List from './List';
import SideMenu from './SideMenu';

const Menu = () => {
  return (
    <div className='container'>
      <div className="row">
     <SideMenu/>
     
     <List/>
        </div>
      </div>
    </div>
  );
};

export default Menu;