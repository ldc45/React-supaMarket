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
    
  );
};

export default Store;