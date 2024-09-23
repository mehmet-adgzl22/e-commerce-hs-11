import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartTotal } from '../redux/cartSlice'
import CartComp from '../components/cart/CartComp'

const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {carts, totalAmount, itemCount} = useSelector (state => state.carts)

    console.log(carts,totalAmount, itemCount, "carts");

    useEffect(()=> {
      dispatch(getCartTotal()) 
    }, [dispatch])
  return (
    <div>

        {
          carts?.length > 0 ? <div> 
            {
              carts?.map((cart, i) => (
                <CartComp key={i} cart={cart} />
              ))
            } 
            <div className='flex font-bold text-2xl items-center justify-end'>TOPLAM TUTAR : <span className='font-bold text-3xl ml-2' >{totalAmount}₺</span></div>
            </div> :
            <div className='flex items-center justify-center font-bold text-3xl m-10 '>
                Sepette Ürün Bulunmamaktadır...
            </div>
        }
    </div>
  )
}

export default Cart