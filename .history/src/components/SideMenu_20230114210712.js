import React from 'react';

const SideMenu = () => {
  const links =["Légumes", "Fruits", "Produits Frais", "Épicerie", "Boissons"]
  const loadCategory = i =>{
    console.log(i)
  }
  return (
    <div className="col-sm-2 sidebar">
       <ul>
    {links.map((link, index) =>{
       return <li key={index}> onClick{link}</li>
    })}
    </ul>
    </div>
  );
};

export default SideMenu;