import React from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../data/Product'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react';

const ProductDetail = () => {
const {id} = useParams();
const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext)

if(!product) return <h2 className='p-6'>Product not found</h2>
  return (
    <div className="p-6 max-w-lg mx-auto border rounded-lg bg-slate-200 text-black">
<h1 className='text-2xl font-bold'>{product.name}</h1>  
<p className='text-lg my-2'>Price: Rs.{product.price}</p> 
<img
className='rounded-md my-4 w-full h-60 object-cover'
src={product.image}
alt={product.name}
>
</img>   
<p>{product.description}</p>
<button onClick={() =>  addToCart(product)} >Add to cart</button>
<div>
  <Link to={"/"} className='px-1 py-0 bg-red-400 rounded-xl' >Back</Link>
</div>
    </div>
    
  )
}

export default ProductDetail
