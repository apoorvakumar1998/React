import { useSelector, useDispatch } from 'react-redux';
import RestaurentMenuList from './RestaurentMenuList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const clearCartItem = () => {
    dispatch(clearCart());
  }
  const total = cartItems.reduce((acc, curr) => {
    return ((curr.card.info.price || curr.card.info.defaultPrice) * curr.quantity) + acc
  }, 0)

  return (
    <div className='m-auto w-6/12'>
      <div className='text-center'>
        {cartItems.length > 0 && <button className='m-2 p-2 text-white bg-black rounded-lg' onClick={clearCartItem}>Clear Cart</button>}
      </div>
      <div>
      </div>
      {!cartItems.length ?
        <div className='flex items-center justify-center mt-10 gap-8 flex-col'>
          <img src="data:image/png;base64,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" />
          <div className='text-center'>
            <div className='font-bold text-2xl'>Your cart is empty</div>
            <div className='mt-2'>You can go to home page to view more restaurants</div>
          </div>
        </div>
        :
        <>
          <RestaurentMenuList menu={cartItems} />
          <div className='flex justify-between mt-4 text-2xl font-bold rounded-lg'>
            <div>TOTAL</div>
            <div>₹{total / 100}</div>
          </div>
        </>
      }
    </div>
  )
}

export default Cart;