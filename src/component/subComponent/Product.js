import React from 'react'
import { NavLink } from 'react-router-dom'

const Product = ({productData}) => {
    const allProducts=productData&&productData.map((el)=>(
        <div className=' w-full md:w-6/12 lg:w-3/12' key={el.id}>
        <div className="card w-11/12 mb-4">
        <img src={el.mainDetails.img} className="card-img-top" alt="..."/>
        <div className="card-body">
         <p className="card-text">{el.mainDetails.decribtion}</p>
         <NavLink to={`${el.id}`} className="btn btn-primary">{el.id}</NavLink>
        </div>
        </div>
        </div>
            ))
            console.log("run again")
  return (
    <>{allProducts}</>
  )
}

export default React.memo(Product)