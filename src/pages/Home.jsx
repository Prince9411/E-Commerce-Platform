import React from 'react'
import products from '../data/Product'
import ProductCard from '../components/ProductCard'
const Home = () => {
  return (
    <div className='p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
     {products.map((p) => <ProductCard key={p.id} product={p}/>)
}
    </div>
  )
}

export default Home
