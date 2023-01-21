import React from 'react';
import { Ctx } from '../../App';
import ProductCard from '../ProductCard';
import './style.css';

const ProductsList = ({cnt}) => {

    const { products } = React.useContext(Ctx)

  return (
    <div className='product-wrapper'>
            {products.slice(cnt-6,cnt).map(el=>(
        <ProductCard key={el._id} {...el}/>
    ))}
    </div>

  )
}

export default ProductsList;