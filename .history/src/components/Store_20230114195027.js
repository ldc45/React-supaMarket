import React from 'react';
import List from './List';
import SideMenu from './SideMenu';
import { list } from '../data';

const Menu = () => {
  return (
    <div className='container'>
      <div className="row">
     <SideMenu/>
     <List data = list/>  
      </div>
    </div>
  );
};

export default Menu;