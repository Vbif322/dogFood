import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', m:5}}>
        <Box sx={{width: '50%'}}>
            <Typography variant='h4' color={'black'}><b>0 товаров</b> в корзине</Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',mb: 10}}>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 10, mb: 5}}>
                    <Typography variant='h5' sx={{color: 'black', fontWeight: 600}}>В корзине нет товаров</Typography>
                    <Typography sx={{color: 'black'}}>Добавьте товар, нажав на кнопку "В корзину" в карточке товара</Typography>
                </Box>
                <Link to='/'><Button variant='outlined'>На главную</Button></Link>
            </Box>
        </Box>
    </Box>
  )
}

export default Cart