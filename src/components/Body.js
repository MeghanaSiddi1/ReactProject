import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import { SWIGGY_API_URL, STATIC_SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

// not using key (not recommended) << index as key <<< unique id as key

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const[filteredRestaurant, setFilteredRestaurant]=useState([]);
  const [searchText,setSearchText]=useState("");
  console.log("listOfRes", listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data= await fetch(SWIGGY_API_URL);
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button className="btnSearch" onClick={()=>{               
                const filteredRestaurant1 = listOfRestaurants.filter((res)=>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                console.log("FFFFFFFF",filteredRestaurant1);
                setFilteredRestaurant(filteredRestaurant1);
            }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (rest) => rest.info.avgRating > 4
            );
            console.log("updated", filteredList);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
