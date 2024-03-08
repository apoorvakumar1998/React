import RestaurentCard, { withPromotedLabel } from './RestaurentCard';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import ShimmerCard from './Shimmer';
import { RESTAURENT_LIST_API } from '../utils/constants';

const Body = () => {
  const [restaurentList, setrestaurentList] = useState([]);
  const [dummyList, setDummyList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const { userName, setUserName } = useContext(UserContext);
  useEffect(() => {
    (async () => {
      const data = await fetch(RESTAURENT_LIST_API);
      const json = await data.json();
      const swiggy_data = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      setrestaurentList(swiggy_data);
      setDummyList(swiggy_data);
    })()
  }, []);
  const onlineStatus = useOnlineStatus();
  const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);

  if (!onlineStatus) return <h1>Looks like you are Offline!!!!!!</h1>

  if (!restaurentList.length) {
    return <ShimmerCard />;
  }
  return (
    <div className="body-container p-6">
      <div className='btn-container flex gap-4 p-1 items-center'>
        <input type='text' className='search-btn border border-solid border-black rounded-lg'
          value={searchText} data-testid="searchInput"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}>
        </input>
        <button className='border border-black cursor-pointer p-1 rounded-lg bg-cyan-400'
          onClick={() => {
            const filteredData = restaurentList.filter(res => res.info.name.toLowerCase().includes(searchText?.toLowerCase()));
            setDummyList(filteredData);
          }}>
          Search
        </button>
        <button className="filter-btn border border-black cursor-pointer p-1 rounded-lg"
          data-testid="topRated"
          onClick={() => {
            let filteredData = restaurentList.filter(res => res.info.avgRating >= 4.5);
            setDummyList(filteredData);
          }}>
          Top Rated Restaurents
        </button>
        <div>User Name:</div>
        <input className="filter-btn border border-black cursor-pointer p-1 rounded-lg" value={userName}
          onChange={(e) => {
            setUserName(e.target.value)
          }}>
        </input>
      </div>
      <div className="res-wrapper flex mx-32 gap-6 flex-wrap items-start justify-center mt-16">
        {dummyList.map((data, index) =>
          <Link data-testid="resCard" className='res-card inline-flex gap-3 flex-col no-underline rounded-lg transition-transform duration-300 ease-in-out w-1/4 hover:cursor-pointer hover:scale-105'
            key={data.info?.id || index}
            to={'restaurent/' + data.info?.id}>
            {data.info.promoted ?
              <RestaurentCardPromoted data={data} /> : <RestaurentCard data={data} />
            }
          </Link>)}
      </div>
    </div>

  )
}

export default Body;