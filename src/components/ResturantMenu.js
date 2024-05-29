import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_LIST } from "../utils/constants";

const ResturantMenu = () => {
    const { resId } = useParams();
    // console.log(params);
    const [resMenu, setResMenu] = useState(null);
    useEffect(() => {
        menuFetched();
    }, [])
    const menuFetched = async () => {
        const data = await fetch(MENU_LIST + resId);
        const resMenuData = await data.json();
        console.log(resMenuData);
        setResMenu(resMenuData.data)
    }

    if (resMenu === null) {
        return <Shimmer />
    }

    const { name, cuisines, avgRating } = resMenu.cards[2].card.card.info
    const { deliveryTime } = resMenu.cards[2].card.card.info.sla
    return (
        <div className="Menu">
            <h1>{name}</h1>
            <h2>{cuisines === 1 ? cuisines : cuisines.join(", ")}</h2>
            <h3>DeliveryTime:{deliveryTime}</h3>
            <h4>Rating:{avgRating}</h4>
            <ul>
                {resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map((menu) => {
                    console.log(menu);
                    return (

                        <p key={menu.card.info.id}>{menu.card.info.name} --{menu.card.info.price / 100 || menu.card.info.defaultPrice / 100}Rs</p>

                    )
                })}
            </ul>
        </div>
    )
}

export default ResturantMenu;