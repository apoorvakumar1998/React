
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { RESTAURENT_MENI_API, IMAGE_URL } from '../utils/constants';

const RestaurentDetails = () => {

  const [resData, setResData] = useState(null);
  const { resId } = useParams();
  useEffect(async () => {
    const data = await fetch(RESTAURENT_MENI_API + resId);
    const json = await data.json();
    setResData(json);
  }, [])

  if (resData === null) return <h1>No Data Found</h1>
  const { name, cuisines, avgRating, costForTwoMessage, sla } = resData.data.cards[0].card.card.info;
  // const menu = resData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories[1].itemCards;
  const menu = resData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
  console.log(menu);
  return (
    <div className="res-details">
      <div className="res-header">
        <div className="res-name">
          <h3>{name}</h3>
          <p>{cuisines.join(', ')}</p>
        </div>
        <div className="res-stars">
          <p>{avgRating} stars</p>
          <p>{costForTwoMessage}</p>
        </div>
      </div>
      <div className="res-menu">
        {menu.map(item => {
          return (
            <div className="menu-item">
              <div className="item-desc">
                <h3>{item.card.info.name}</h3>
                <div>{item.card.info.defaultPrice} Rs</div>
                <div>{item.card.info.description}</div>
              </div>
              <div>
                <img className="menu-img" alt="logo" src={IMAGE_URL + item.card.info.imageId}></img>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )

}



export default RestaurentDetails;