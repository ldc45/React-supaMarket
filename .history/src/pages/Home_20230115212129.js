import { React, useState, useEffect } from 'react'
import List from '../components/List'
import SideMenu from '../components/SideMenu'
import { list } from '../data'
import Navigation from '../components/Navigation'

const Home = () => { 

  const [category, setCategory] = useState(0)
  const loadCategory = (i) => {
    setCategory(i)
  }

  const [isFiltering, setFiltering] =useState(false)
  const filterResults = (input) => {
    let fullList = list.flat()
    let filtered = fullList.filter((product) => {
      const name = product.name.toLowerCase()
      const term = input.toLowerCase()
      return name.indexOf(term) > -1
    })
    console.log(filtered);
  }
  useEffect(()=>{
    setFiltering(isFiltering)
  })

  return (
    <div>
      <Navigation filter={filterResults} setFiltering={setFiltering}/>
      <div className="container">
        <div className="row">
          <SideMenu loadCategory={loadCategory} category={category} />
          <List grocery={list[category]} category={category} />
        </div>
      </div>
    </div>
  )
}

export default Home
