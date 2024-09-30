import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import { SWIGGY_API_URL, STATIC_SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

// not using key (not recommended) << index as key <<< unique id as key

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
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
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional rendering
  // if(listOfRestaurants.length===0){
  //     return (<Shimmer/>)
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (rest) => rest.info.avgRating > 4.6
            );
            console.log("updated", filteredList);
            setListOfRestaurants(filteredList);
            // setListOfRestaurants(prev => prev.filter(rest => rest.info.avgRating > 4.6));
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
