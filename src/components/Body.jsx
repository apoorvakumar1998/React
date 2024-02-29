import RestaurentCard from './RestaurentCard';
import resList from '../utils/mockData';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Body = () => {
  const [restaurentList, setrestaurentList] = useState([]);
  const [dummyList, setDummyList] = useState([]);
  const [searchText, setSearchText] = useState([null]);
  useEffect(() => {
    (async () => {
      const data = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const json = await data.json();
      const swiggy_data = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      setrestaurentList(swiggy_data);
      setDummyList(swiggy_data);
    })()
  }, []);
  if (!restaurentList.length) {
    // Add shimmer component here
    // conditional rendering
    return <div>Loading.....</div>;
  }
  return (
    <div className="body-container">
      <div className='btn-container'>
        <input type='text' className='search-btn' value={searchText} onChange={(e) => {
          setSearchText(e.target.value);
        }}></input>
        <button onClick={() => {
          const filteredData = restaurentList.filter(res => res.info.name.toLowerCase().includes(searchText?.toLowerCase()));
          setDummyList(filteredData);
        }}>Search</button>
        <button className="filter-btn" onClick={() => {
          let filteredData = restaurentList.filter(res => res.rating >= 4);
          setDummyList(filteredData);
        }}>Top Rated Restaurents</button>
      </div>
      <div className="res-wrapper">
        {dummyList.map((data, index) => <Link className='res-card' key={data.info?.id || index} to={'restaurent/' + data.info?.id}> <RestaurentCard data={data} /></Link>)}
      </div>
    </div>

  )
}

export default Body;