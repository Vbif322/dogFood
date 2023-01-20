import React from 'react';
import "./style.css"

const AddToCart = () => {

    const [count, setCount] = React.useState(0);

    const btnMinusHandle = () => {
        setCount(()=>{
            if(count>0){
                return count-1
            } else return 0
        })
    }

    const btnPlusHandle = () => {
        setCount(()=> count+1)
    }

  return (
    <div className='AddToCart__wrapper'>
        <button id='minus' onClick={btnMinusHandle}><span>-</span></button>
        <p>{count}</p>
        <button id='plus' onClick={btnPlusHandle}><span>+</span></button>
    </div>
  )
}

export default AddToCart