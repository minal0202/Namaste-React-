import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
    const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, id } = restaurant?.info;
    return (
        <Link to={"/restaurants/" + id} className="restaurant-card" style={{ background: "#f0f0f0" }}>
            <img className="restaurant-logo" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4> {avgRating} stars</h4>
            <h4>₹{costForTwo}</h4>
            <h4>{restaurant?.info?.sla?.deliveryTime} Mins</h4>
        </Link>
    )
}

export default RestaurantCard;