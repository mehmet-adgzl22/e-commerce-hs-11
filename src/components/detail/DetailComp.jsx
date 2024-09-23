import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice';

const DetailComp = ({productDetail}) => {
     const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0)

    const decrement = () => {
        if(quantity >0) setQuantity(quantity - 1)
    }

    const increment = () => {
        if(quantity <productDetail?.rating?.count) setQuantity(quantity + 1)
    }

    const addBasket = () => {
        dispatch(addToCart({id: productDetail?.id, title: productDetail?.title, image:productDetail?.image, price: productDetail?.price, quantity: quantity }))
    }
  return (
    <div className='flex gap-10 my-10'>
        <img className='w-[400px] h-[400px] object-cover' src= {productDetail?.image} alt=""/>
        <div className=''>
            <div className='text-4xl font-bold'>{productDetail?.title}</div>
            <div className='my-5 text-2xl'>{productDetail?.description}</div>
            <div className='my-3 text-xl font-bold text-red-600'>Rating : {productDetail?.rating?.rate} </div>
            <div className='my-3 text-xl font-bold text-green-600'>Count : {productDetail?.rating?.count} </div>
            <div className='text-5xl font-bold'>{productDetail?.price} <span className='text-xl'>₺</span> </div>
            <div className='flex items-center gap-5 my-4'>
            <div onClick={decrement} className='text-5xl cursor-pointer'>-</div>
            <input className='w-12 text-center text-4xl font-bold' type="text" value={quantity} />
            <div onClick={increment} className='text-4xl cursor-pointer'>+</div>
            </div>
            <div onClick={addBasket} className='my-4 border w-[200px] text-2xl rounded-md bg-gray-300 cursor-pointer h-16 flex items-center justify-center '>Sepete Ekle</div>
        </div>
    </div>
  )
}

export default DetailComp