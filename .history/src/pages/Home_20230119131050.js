import { React, useState} from 'react'
import List from '../components/List'
import SideMenu from '../components/SideMenu'
import { list } from '../data'
import Navigation from '../components/Navigation'


const Home = () => { 

  //const [count, setCount] = useState(1);
  const [category, setCategory] = useState(0)
  const loadCategory = (i) => {
    setCategory(i)
  }
  const [filtered, setFiltered] = useState(false)
  const [isFiltering, setFiltering] =useState(false)
  const filterResults = (input) => {
    // La méthode flat() permet de créer un nouveau tableau contenant les éléments des sous-tableaux
    let fullList = list.flat()
    let resultFiltered = fullList.filter((product) => {
      const name = product.name.toLowerCase()
      const term = input.toLowerCase()
      return name.indexOf(term) > -1
    })
   setFiltered(resultFiltered)
  }

  return (
    <div>
      <Navigation filter={filterResults} setFiltering={setFiltering} {/* count={count}*/}  /> 
      <div className="container">
        <div className="row">
          <SideMenu loadCategory={loadCategory} category={category} />
          <List grocery={isFiltering? filtered : list[category]} category={category}/>
        </div>
      </div>
    </div>
  )
}

export default Home
