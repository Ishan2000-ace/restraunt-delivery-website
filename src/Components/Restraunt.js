import React, { useState } from 'react'
import Logo from './logo.png'
import Cart from './cart.jpg'
import Locate from './locate.jpg'
import Card from './Card'
import Data from '../Data'
import Search from './search.png'


export default function Restraunt() {

  const[menuData, setMenu] = useState(Data)
  const[search, setSearch] = useState("");

  const filterItem = (category)=>{

    if(category==="All"){
      setMenu(Data)
    }
    let updatedList = Data.filter((curElem)=>{
      return curElem.category===category
    })

    
    setMenu(updatedList)
  }

  function getSearch(event){
    setSearch(event.target.value)
  }

  function searchItem(){
    const searchres = Data.filter((elem)=>{
      return elem.name===search
    })

    setMenu(searchres)

    if(search===""){
      setMenu(Data)
    }
  }

  function sort_by_price(){
    
   const price = Data.sort(function(objA, objB){
        return objA.price-objB.objB.price
    })

    setMenu(price)
  }
  return (
    <>
    <div className='px-8 flex space-x-8 items-center py-4 shadow-md'>
    <img src={Logo} alt="logo" height={40} width={40}/>
    <button onClick={()=>setMenu(Data)}>All</button>
    <button onClick={()=>filterItem("breakfast")}>BreakFast</button>
    <button onClick={()=>filterItem("lunch")}>Lunch</button>
    <button onClick={()=>filterItem("evening")}>Evening</button>
    <button onClick={()=>filterItem("dinner")}>Dinner</button>
    <label for="cars">Sort Items by:</label>

<select name="cars" id="cars">
  <option value="price" onClick={sort_by_price}>Price</option>
  <option value="availablity">Availablity</option>
</select>
 
<div className='px-30 flex justify-end'>
  <input type="text" placeholder='Search' className='w-80' value={search} onChange={getSearch}/>
  <button onClick={searchItem}><img src={Search} alt="search-button" height={40} width={40}/></button>
</div>

<button className='flex items-center'><img src={Cart} alt="cart" height={40} width={40} />Cart</button>

<div className='px-10 flex items-center'>
<img src={Locate} alt="location" width={40} height={40}/>
location
</div>
    </div>
<div className='flex'><Card menuData={menuData}/></div>

    </>
  )
}

