import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

// not using key (not recommended) << index as key <<< unique id as key

const Body = () => {
    // const arr=useState(resList);
    // const [listOfRestaurants, setListOfRestaurants] = arr;
    // The above one also works

  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  console.log('listOfRes',listOfRestaurants);

//   const listOfRestaurants = arr[0];
//   const setListOfRestaurants = arr[1];
//  But we are destructuring on the fly instead of using this


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (rest) => rest.info.avgRating > 4.6
            );
            console.log('updated', filteredList);
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
