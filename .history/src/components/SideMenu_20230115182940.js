

const SideMenu = ({loadCategory}) => {
  const links = [ 'Fruits', 'Produits Frais', 'Épicerie', 'Boissons']

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
