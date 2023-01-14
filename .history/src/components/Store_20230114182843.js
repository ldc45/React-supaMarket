import React from 'react';
import Card from './Card';
import SideMenu from './SideMenu';

const Menu = () => {
  return (
    <div className='container'>
      <div className="row">
     <SideMenu/>
        <div className="col-sm">
<Card/>
        </div>
      </div>
    </div>
  );
};

export default Menu;