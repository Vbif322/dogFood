import React from 'react';
import { Ctx } from '../App';
import ProductCard from '../Components/ProductCard';

const Catalog = () => {

    const { products } = React.useContext(Ctx)
    console.log(products)

    const st = {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        gap: "20px",
        padding: '10px 200px'}

  return (
    <div style={st}>
            {products.map(el=>(
        <ProductCard key={el._id} {...el}/>
    ))}
    </div>
  )
}

export default Catalog;