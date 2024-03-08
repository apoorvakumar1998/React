import { addItem } from '../utils/cartSlice';
import { IMAGE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';

const RestaurentMenuList = ({ menu, hideAddButton }) => {

  const dispatch = useDispatch();
  const addCartItem = (item) => {
    dispatch(addItem(item));
  }
  return (
    <div className="res-menu flex flex-col border border-stone-300 rounded-lg bg-gray-100">
      {menu.map(item => {
        const { name, defaultPrice, price, description, id, imageId } = item.card.info;
        return (
          <div data-testid="items" className="menu-item inline-flex justify-between gap-4 py-3 p-4 border-b-1 border-black relative" key={id}>
            <div className="item-desc w-3/4">
              <h3 className='font-semibold font-sans'>{name}</h3>
              <div>₹ {(defaultPrice || price) / 100}</div>
              <div>{description}</div>
            </div>
            <div className='w-1/4 flex items-center justify-end gap-2'>
              <div className="relative w-28 h-28 rounded-lg overflow-hidden">
                <img className="menu-img w-full h-full rounded-lg" alt="logo" src={IMAGE_URL + imageId}></img>
                {!hideAddButton && (
                  <button className='absolute top-0 left-0 mt-2 ml-2 text-black p-1 rounded-lg text-center bg-green-300' onClick={() => addCartItem(item)}>Add</button>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>

  )
}


export default RestaurentMenuList;