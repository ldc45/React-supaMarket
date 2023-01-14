import React, { useState } from 'react'

const SideMenu = () => {
  const links = ['Légumes', 'Fruits', 'Produits Frais', 'Épicerie', 'Boissons']
  const [category, setcategory] = useState(0)
  const loadCategory = (i) => {
  setCategor(i)
  }
  return (
    <div className="col-sm-2 sidebar">
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index} onClick={() => loadCategory(index)}>
              {link}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SideMenu
