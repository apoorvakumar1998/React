import { IMAGE_URL } from '../utils/constants';

const RestaurentMenuList = ({ menu }) => {
  return (
    <div className="res-menu flex flex-col border border-stone-300 rounded-lg bg-gray-100">
      {menu.map(item => {
        const { name, defaultPrice, price, description, id, imageId } = item.card.info;
        return (
          <div className="menu-item inline-flex justify-between gap-4 py-3 p-4 border-b-1 border-black" key={id}>
            <div className="item-desc w-3/4">
              <h3 className='font-semibold font-sans'>{name}</h3>
              <div>₹ {(defaultPrice || price) / 100}</div>
              <div>{description}</div>
            </div>
            <div className='w-1/4 contents'>
              <img className="menu-img w-28 rounded-lg" alt="logo" src={IMAGE_URL + imageId}></img>
            </div>
          </div>
        )
      })}
    </div>
  )
}


export default RestaurentMenuList;