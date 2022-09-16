import React from 'react'
import { useParams } from 'react-router-dom'

const Singleproduct = () => {
    let {ProductId}=useParams();
  return (
    <div>
       {ProductId}
    </div>
  )
}

export default Singleproduct