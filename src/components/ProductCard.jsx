import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <div className='border p-4 rounded-lg bg-zinc-200 '>
       <h1>Product Id: {product.id}</h1>
       <p>Product name: {product.name}</p>
       <p>Price: {product.price}</p>
<img className='rounded-md p-2 bg-slate-500' src={product.image} alt={product.name}></img>
       <h1>Description: {product.description}</h1>
<Link to={`/product/${product.id}`} > View Details</Link>
    </div>
  )
}

export default ProductCard;
