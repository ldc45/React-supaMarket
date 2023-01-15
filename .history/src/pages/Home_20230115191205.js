import React from 'react';
import Store from '../components/Store';
import Navigation from '../components/Navigation';


const Home = () => {
  const filterResults = (input) => {
    console.log(input)
     }
  return (
    <div>
    <Navigation filter= {fil}/>
    <Store/>
    </div>
  );
};

export default Home;