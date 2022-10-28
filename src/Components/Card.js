import React from 'react'


export default function Card({menuData}) {
  return (
    <>
    {
      menuData.map((curelem)=>{
       
        let avail=""
        let status = ""

        curelem.isAvailable? avail="Available": avail="Not Available"

        curelem.isAvailable? status="Delivered in 30 Mins": status="Will Take Longer Than Usual"

        return(
          <>
          <div className='flex flex-wrap'>
    <div className='w-300px m-3  border-2 rounded-xl'>
    <img className='rounded-md' src={curelem.image} alt="item pic" width={300} height={100}/>
    <p className='m-3 text-2xl font-bold'><h1>{curelem.name}</h1></p>

    <p className='m-3 text-gray-600'>Category: {curelem.category}</p>

    <div>{curelem.description}</div>
    
    <p className='m-3'>Price: <strong>{curelem.price}₹</strong></p>
    <p className={curelem.isAvailable?'m-3 text-lime-800':'m-3 text-red-600'}>{avail}</p>
    <p className={curelem.isAvailable?'m-3 text-lime-800':'m-3 text-yellow-600'}>{status}</p>
    <p className='m-3 flex space-x-8'>
       <button className='p-1 text-cyan-300  rounded-md-cyan-400 hover:scale-110 b'>Order Now</button>
        <button className='bg-amber-400 rounded-ml p-1 rounded-md hover:scale-110'>Add To Cart</button>
    </p>
    
    </div>
    </div>
          </>
        )
      })
    }
    </>
  )
}
