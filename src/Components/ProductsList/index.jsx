import React from 'react';
import ProductCard from '../ProductCard';
import './style.css'

const ProductsList = ({data}) => {
  return (
    <div className='product-wrapper'>
            {data.map(el=>(
        <ProductCard key={el.id} {...el}/>
    ))}
    </div>

  )
}

export default ProductsList;