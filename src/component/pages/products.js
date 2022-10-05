import React from 'react'
import { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { NavLink } from 'react-router-dom'
import { getProducts } from '../../redux/Products/productSlice'
// import Product from '../subComponent/Product'

const Products = ({children}) => {
    const productData=useSelector(state=>state.products.data)
    console.log(productData)
    const dispatch=useDispatch()
    useLayoutEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    const cloneElement=React.cloneElement(children,{productData})
    return (
        <div className='container d-flex flex-wrap flex-row my-4'>
              {cloneElement}
        </div>
    )
}

export default Products