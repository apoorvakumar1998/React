import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { userName } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const itemCount = cartItems.reduce((acc, curr) => {
    return curr.quantity + acc
  }, 0)
  return (
    <div className="flex justify-between items-center sticky top-0 bg-yellow-100 border-yellow-400 z-[999] border-b-2">
      <div className="logo-container flex items-center">
        <img src={LOGO_URL} alt="Logo" className="w-16" />
        <div className='font-bold text-xl ml-4 font-mono hover:italic text-yellow-400'>Eat-Easy</div>
      </div>
      <div className="nav-items">
        <ul className='flex items-center justify-center gap-8 pr-20 cursor-pointer'>
          <li>
            {onlineStatus ? 'Online✅' : 'Offline❌'}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About Us</Link>
          </li>
          <li>
            <Link to="cart">Cart ({itemCount})</Link>
          </li>
          <li className='text-xl font-bold'>{userName}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;