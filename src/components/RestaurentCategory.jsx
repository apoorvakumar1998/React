import RestaurentMenuList from './RestaurentMenuList';

const RestaurentCategory = ({ data, showItems, setshowItems }) => {

  return (
    <div className='w-full'>
      <div className="flex justify-between shadow-lg w-full p-4 mt-4 rounded-lg cursor-pointer" onClick={() => {
        setshowItems();
      }}>
        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        <span>{showItems ? '⬆' : '⬇'}</span>
      </div>
      <div>{
        showItems ?
          <RestaurentMenuList
            menu={data.itemCards} />
          : ''
      }
      </div>
    </div>
  )
}


export default RestaurentCategory;