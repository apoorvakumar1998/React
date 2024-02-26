const RestaurentCard = (prop) => {
  return (
    <div className="res-card">
      <div className="res-logo">
        <img className="res-logo" alt="logo" src={prop.data.logo}></img>
      </div>
      <div className="res-body">
        <h3>{prop.data.name}</h3>
        <h3>{prop.data.cuisine}</h3>
        <h3>{prop.data.rating} stars</h3>
        <h3>{prop.data.ETA}</h3>
      </div>
    </div>
  )
}

export default RestaurentCard;