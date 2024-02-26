import { IMAGE_URL } from "../utils/constants";

const RestaurentCard = (prop) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = prop.data.info;
  return (
    <div className="res-card">
      <div className="res-logo-wrapper">
        <img className="res-logo" alt="logo" src={IMAGE_URL + cloudinaryImageId}></img>
      </div>
      <div className="res-body">
        <h3 className="res-name">{name}</h3>
        <h3>{cuisines.join(', ')}</h3>
        <h3>{avgRating} ☆</h3>
        <h3>{costForTwo}</h3>
      </div>
    </div>
  )
}

export default RestaurentCard;