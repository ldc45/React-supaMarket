import React from 'react';
import List from './List';
import SideMenu from './SideMenu';
import { list } from '../data';

const  = () => {
  return (
    <div className='container'>
      <div className="row">
     <SideMenu/>
     <List  key={index} products = {list}/>  
      </div>
    </div>
  );
};

export default Menu;