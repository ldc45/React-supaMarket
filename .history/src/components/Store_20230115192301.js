import {React,  useState }from 'react';
import List from './List';
import SideMenu from './SideMenu';
import { list } from '../data';

const Store = () => {
  const [category, setCategory] = useState(0)
  const loadCategory = (i) => {
  setCategory(i)
  }
 
  return (
    <div className='container'>
      <div className="row">
     <SideMenu loadCategory={loadCategory} category={category}/>
     <List grocery= {list[category]} category={category}/>  
      <v>
  );/div>
    </di
};

export default Store;