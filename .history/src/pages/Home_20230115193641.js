import {React,  useState }from 'react';

import { list } from '../data';
import Navigation from '../components/Navigation';


const Home = () => {
  const [category, setCategory] = useState(0)
  const loadCategory = (i) => {
  setCategory(i)
  }
  const filterResults = (input) => {
    console.log(input)
     }
  return (
    <div>
    <Navigation filter= {filterResults}/>
    <div className='container'>
      <div className="row">
     <SideMenu loadCategory={loadCategory} category={category}/>
     <List grocery= {list[category]} category={category}/>  
      </div>
    </div>
    </div>
  );
};

export default Home;