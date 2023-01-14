import React from 'react';

const SideMenu = () => {
  return (
    <div className="col-sm-2 sidebar">
      const links =["Légumes", "Fruits", "Produits Frais", "Épicerie", "Boissons"]
    <ul>
    {links.map(link)}
    </ul>
    </div>
  );
};

export default SideMenu;