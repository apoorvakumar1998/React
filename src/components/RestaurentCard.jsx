import { IMAGE_URL } from "../utils/constants";

const RestaurentCard = (prop) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = prop.data.info;
  return (
    <div>
      <div className="res-logo-wrapper rounded-2xl overflow-hidden">
        <img className="res-logo w-full h-44 object-cover" alt="logo" src={IMAGE_URL + cloudinaryImageId}></img>
      </div>
      <div className="res-body p-2 font-serif text-sm flex flex-col gap-1">
        <h3 className="res-name text-lg font-semibold">{name}</h3>
        <h3>{cuisines.join(', ')}</h3>
        <h3>{avgRating} ☆</h3>
        <h3>{costForTwo}</h3>
      </div>
    </div>
  )
}


export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="text-white bg-black absolute top-0 left-0 rounded-lg p-2 m-2">Promoted</label>
        <RestaurentCard  {...props} />
      </div>
    )
  }
}

export default RestaurentCard;