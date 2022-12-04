import { WrapText } from '@mui/icons-material';
import React from 'react';
import ProductCard from '../Components/ProductCard';
import data from '../JSON/Products.json';

const Catalog = () => {

    const st = {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        gap: "20px",
        padding: '10px 200px'}

  return (
    <div style={st}>
            {data.map(el=>(
        <ProductCard key={el.id} {...el}/>
    ))}
    </div>
  )
}

export default Catalog;