import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAUNTS_URL } from "../utils/constants";

const Body = () => {
    let [restaurantList, setRestaurantList] = useState([]);
    let [searchInputText, setSearchInputText] = useState("");
    let [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(RESTAUNTS_URL);
            const json = await data.json();
            setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (err) {
            console.log(err);
        }
    }

    return filteredRestaurantList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filters">
                <div className="searchBar">
                    <input type="text" className="searchInput" value={searchInputText} onChange={(evt) => { setSearchInputText(evt.target.value) }} />
                    <button className="searchButton" onClick={() => {
                        setFilteredRestaurantList(restaurantList.filter((restaurant) => { console.log(restaurant); return restaurant.info.name.toLowerCase().includes(searchInputText.toLowerCase()) }))
                    }}>Search</button>
                </div>
                <button
                    className="top-rated-restaurants"
                    onClick={
                        () => {
                            setFilteredRestaurantList(restaurantList.filter((restaurant) => { return restaurant.info.avgRating >= 4 }));
                        }
                    }>
                    Top rated restaurants
                </button>
            </div>
            <div className="restaurant-container">
                {
                    filteredRestaurantList.map((restaurant) => <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />)
                }
            </div>
        </div>
    )
}

export default Body;