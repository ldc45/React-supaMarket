import React from 'react';

const SideMenu = () => {
  const links =["Légumes", "Fruits", "Produits Frais", "Épicerie", "Boissons"]
  const
  return (
    <div className="col-sm-2 sidebar">
       <ul>
    {links.map(link =>{
       return <li>{link}</li>
    })}
    </ul>
    </div>
  );
};

export default SideMenu;