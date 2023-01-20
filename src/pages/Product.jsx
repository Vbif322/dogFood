import { Box, Typography, Rating, Button } from '@mui/material'
import React from 'react';

const Product = () => {

    const [rate, setRate] = React.useState(2.5)


    const miniCardStyle= {
        bgcolor: 'rgb(166, 209, 248)',
        padding: 3, 
        width: 200,
        display:'flex',
        flexDirection: 'column',
        gap: 1
    }

  return (
    <Box sx={{marginRight: '200px', marginLeft: '200px', marginTop: '20px'}}>
        <Typography variant='h5' fontWeight={700}>Бублик из бычьего корня</Typography>
        <Box sx={{display: 'flex', gap: 3}}>
            <Typography>Артикул: 2388907</Typography>
            <Rating 
                name="half-rating" 
                value={rate} 
                precision={0.5} 
                onChange={(e, newValue) => setRate(newValue)}
            />
            <a href='#'>81 отзыв</a>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Box sx={{width:'100%'}}>
                <img src='https://react-learning.ru/image-compressed/1.jpg'/>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                <Typography>495 ₽</Typography>
                <Box>
                    <Button>- 0 +</Button>
                    <Button variant='contained'> В корзину</Button>
                </Box>
                <Typography>В избранное</Typography>
                <Box sx={miniCardStyle}>
                    <Typography><b>Доставка по всему миру!</b></Typography>
                    <Typography>Доставка курьером - от 399 ₽</Typography>
                    <Typography>Доставка в пункт выдачи - от 199 ₽</Typography>
                </Box>
                <Box sx={miniCardStyle}>
                    <Typography><b>Гарантия качества</b></Typography>
                    <Typography>Если вам не понравилось качество нашей продукции, мы вернем вам деньги, либо сделаем все возможное, чтобы удовлетворить ваши нужды</Typography>
                </Box>
            </Box>
        </Box>
        <Typography variant='h5' fontWeight={600}>Описание</Typography>
        <Typography>Бублик из бычьего корня - забавная, интересная, вкусная, а главное - полезная вкусняшка для вашего любимца. Неповторимый вкус этого лакомства надолго отвлечет вашего питомца от любых дел</Typography>
        <Typography variant='h5' fontWeight={600}>Характеристики</Typography>
    </Box>
  )
}

export default Product