import { Box, Typography, Rating, Button } from '@mui/material'
import React from 'react';
import { useParams } from 'react-router-dom';
import api from '../Api';
import AddToCart from '../Components/AddToCart/AddToCart';

const Product = () => {

    const [rate, setRate] = React.useState(2.5)
    const [prod, setProd] = React.useState({})

    let params = useParams();

    React.useEffect(()=> {
        api.getProduct(params.id)
        .then(data=>{
            console.log(data);
            setProd(data);
        })
    },[])


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
            <Box sx={{width:'70%'}}>
                <img src='https://react-learning.ru/image-compressed/1.jpg'/>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                <Typography variant='h6'>495 ₽</Typography>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>
                    <AddToCart />
                    <Button variant='contained' sx={{height: '50px', width: '40%'}}> В корзину</Button>
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
        <Typography variant='h5' fontWeight={600} mb={3}>Описание</Typography>
        <Typography  mb={5}>Бублик из бычьего корня - забавная, интересная, вкусная, а главное - полезная вкусняшка для вашего любимца. Неповторимый вкус этого лакомства надолго отвлечет вашего питомца от любых дел</Typography>
        <Typography variant='h5' fontWeight={600} mb={3}>Характеристики</Typography>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
            <Typography>Вес____________ 1 шт 120-200 гр</Typography>
            <Typography>Цена____________ 490 ₽ за 100 гр</Typography>
            <Typography>Польза____________ Большое содержание аминокислот и микроэлементов оказывает положительное воздействие на общий обмен веществ</Typography>
        </Box>
        <Typography variant='h5' fontWeight={600} mb={3} mt={5}>Отзывы</Typography>
        <Button variant='contained' sx={{bgcolor: 'white', color: 'black', borderRadius: '15px', marginBottom: 5}}>Написать отзыв</Button>
    </Box>
  )
}

export default Product