import React from 'react'
import {Button, Card, CardContent, CardMedia, Typography} from '@mui/material'

const ProductCard = ({name, picture, price, weight}) => {
  return (
    <Card sx={{maxWidth: 250, maxHeight: 300}}>
        <CardMedia
          image={picture}
          alt={name}
          title={name}
          sx={{ height:100}}
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
            <Button variant="contained" sx={{bgcolor: '#ffe44d', color: '#000', mt: 2}}>
              В корзину
            </Button>
        </CardContent>
    </Card>
  )
}

export default ProductCard;