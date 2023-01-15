

const SideMenu = ({loadCategory}) => {
  const links = ['Fruits', 'Légumes', 'Produits Frais', 'Épicerie', 'Boissons']

  return (
    <div className="col-sm-2 sidebar">
      <ul>
        {links.map((link, index) => {
          return (
            <li className={catetory == index && 'active'} key={index} onClick={() => loadCategory(index)}>
              {link}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SideMenu
