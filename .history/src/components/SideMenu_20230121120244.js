

import React from 'react';

const SideMenu = () => {
  return (
    <div>
      
    </div>
  );
};

export default SideMenu;
const SideMenu = ({loadCategory, category}) => {
  const links = ['Fruits', 'Légumes', 'Produits Frais', 'Épicerie', 'Boissons']

  return (
    <div className="col-sm-2 sidebar">
      <ul>
        {links.map((link, index) => {
          return (
            <li className={category === index && 'active'} key={index} onClick={() => loadCategory(index)}>
              {link}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SideMenu
