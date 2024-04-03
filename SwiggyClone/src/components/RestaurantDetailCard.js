import { useEffect, useState } from "react";
import { RESTAURANT_DETAIL_URL } from "../utils/constants";
import MenuItem from "./MenuItem";
import { useParams } from "react-router-dom";

const RestaurantDetailCard = () => {

    const [resInfo, setResInfo] = useState({});
    const [menu, setMenu] = useState([]);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const response = await fetch(RESTAURANT_DETAIL_URL + resId);
        const json = await response.json();

        console.log(json);
        setResInfo(json?.data?.cards[2]?.card?.card?.info);

        setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);

    }

    return (
        <div className="restaurantDetailContainer">
            <div className="resDetails">
                <h2>{resInfo?.name}</h2>
                <p>{resInfo?.cuisines?.join(", ")} - {resInfo?.costForTwoMessage}</p>
            </div>
            <div className="menuContainer">
                {
                    menu?.map((item) => {
                        const info = item?.card?.info;
                        if (info) {
                            return (
                                <MenuItem dish={info} id={info?.id} />
                            )
                        }
                    })
                }
            </div>
        </div>
    );
}

export default RestaurantDetailCard;