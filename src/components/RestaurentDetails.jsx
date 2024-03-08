
import { useParams } from 'react-router-dom';
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from './RestaurentCategory';
import { useState } from 'react';
import ShimmerCard from './Shimmer';

const RestaurentDetails = () => {

  let [showItems, setShowItems] = useState(null);
  const { resId } = useParams();
  const resData = useRestaurentMenu(resId);

  if (resData === null) return <ShimmerCard />
  const { name, cuisines, avgRating, costForTwoMessage, sla } = resData.data.cards[0].card.card.info;
  // TODO:Change API to stable one
  let menu = (resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[1]?.itemCards);
  if (menu === undefined) {
    menu = resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
  }
  const itemCategory = resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
  return (
    <div className="res-details flex items-center justify-center flex-col mt-16 mx-72">
      <div className="res-header flex items-center justify-between p-4 rounded-lg border border-solid border-black w-full">
        <div className="res-name">
          <h3 className='text-2xl font-semibold'>{name}</h3>
          <p className='text-sm'>{cuisines.join(', ')}</p>
        </div>
        <div className="res-stars text-center p-2 rounded-lg border border-solid border-black">
          <p>{avgRating} stars</p>
          <p>{costForTwoMessage}</p>
        </div>
      </div>
      {
        itemCategory.map((item, index) =>
          <RestaurentCategory
            key={item?.card?.card.title}
            data={item?.card?.card}
            showItems={index === showItems}
            setshowItems={() => setShowItems(index)}
          />)
      }
    </div>
  )

}



export default RestaurentDetails;