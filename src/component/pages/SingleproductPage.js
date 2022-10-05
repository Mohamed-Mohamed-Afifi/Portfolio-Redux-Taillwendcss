import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'

const SingleproductPage = () => {
    let {ProductId}=useParams();
    let allProducts=useSelector(state=>state.products.data)
    console.log("first",allProducts)
    const currentProduct=allProducts.filter((el)=>el.id==ProductId)
    console.log(currentProduct)
  return (
    <div>
       <div className=' w-full md:w-6/12 lg:w-3/12'>
        <div className="card w-11/12 mb-4">
        <img src={currentProduct[0].mainDetails.img} className="card-img-top" alt="..."/>
        <div className="card-body">
         <h5 className="card-title">Card title</h5>
         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default SingleproductPage