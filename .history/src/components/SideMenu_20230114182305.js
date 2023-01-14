import React from 'react';

const SideMenu = () => {
  const links =["Légumes", "Fruits", "Produits Frais", "Épicerie", "Boissons"]
  return (
    <div className="col-sm-2 sidebar">
       <ul>
    {links.map(link =>{
      <li>{link}</li>
    })}
    </ul>
    </div>
  );
};

export default SideMenu;