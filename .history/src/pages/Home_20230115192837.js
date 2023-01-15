import React from 'react';
import Store from '../components/Store';
import Navigation from '../components/Navigation';


const Home = () => {
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