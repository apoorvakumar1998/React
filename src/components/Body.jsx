import RestaurentCard from './RestaurentCard';
import resList from '../utils/mockData';
import { useState } from 'react';

const Body = () => {
  console.log(useState(resList));
  let [RestaurentList, setRestaurentList] = useState(resList);
  return (
    <div className="body-container">
      <button className="filter-btn" onClick={() => {
        let filteredData = RestaurentList.filter(res => res.rating >= 4);
        setRestaurentList(filteredData);
      }}>Top Rated Restaurents</button>
      <div className="res-wrapper">
        {RestaurentList.length ? (
          RestaurentList.map((data, index) => <RestaurentCard key={index} data={data} />)
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>

  )
}

export default Body;