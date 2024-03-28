import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = ({ restaurants }) => {
    let [restaurantList, setRestaurantList] = useState(restaurants);
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="filters">
                <button
                    className="top-rated-restaurants"
                    onClick={() => { console.log('test'); setRestaurantList(restaurantList.filter((restaurant) => restaurant.info.avgRating >= 4)); console.log(restaurants.length) }} >
                    Top rated restaurants
                </button>
            </div>
            <div className="restaurant-container">
                {
                    restaurantList.map((restaurant) => <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />)
                }
            </div>
        </div>
    )
}

export default Body;