import React from 'react'
import './Style.css'


export default function Card({menuData}) {
  return (
    <>
    {
      menuData.map((curelem)=>{
       
        let avail=""
        let status = ""
        

        curelem.isAvailable? avail="Available": avail="Not Available"

        curelem.isAvailable? status="Delivered in 30 Mins": status="Will Take Longer Than Usual"

        const styles = {
          color: curelem.isAvailable? "#00FF00" : "#FFFF00"
        }

        return(
          <>
          <div className='card'>
          <div className="image">
           <img src={curelem.image} alt="food" className='title-image'/> 
          </div>
     <div className='title'>{curelem.name}</div>
     <p><strong>Category: </strong>{curelem.category}</p>
       
     
      

     
      <p><strong>Price: {curelem.price}₹</strong></p>
      <p style={styles}>{avail}</p>
       <div className='btns'>
       <button className="btn-order">Order Now</button>
       <button className="btn-cart">🛒 Add To Cart</button>
       </div>
       <div className="mess" style={{color: curelem.isAvailable? "#00FF00" : "#FF0000"}}>{status}
     </div>
    </div>
          </>
        )
      })
    }
    </>
  )
}
