import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { userName } = useContext(UserContext);
  return (
    <div className="flex justify-between items-center sticky top-0 bg-yellow-50 border-black z-[999]">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo" className="w-28" />
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
          <li className='text-xl font-bold'>{userName}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;