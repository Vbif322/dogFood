import React from 'react'
import {Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

const ProductCard = ({name, pictures, price, weight}) => {
  return (
    <Link to='/product/:id'>
        <Card sx={{width: 250, height: 350, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center'}}>
            <CardMedia
            image={pictures}
            alt={name}
            title={name}
            sx={{ height:100, backgroundSize: 'contain', width: '100%'}}
            />
            <CardContent>          
                <Typography variant="h5" component="div">
                {price} ₽
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {weight}
                </Typography>            
                <Typography variant="h5" component="div">
                {name}
                </Typography>
            </CardContent>
            <Button variant="contained" sx={{bgcolor: '#ffe44d', color: '#000', width: '50%'}}>
                В корзину
            </Button>
        </Card>
    </Link>
  )
}

export default ProductCard;