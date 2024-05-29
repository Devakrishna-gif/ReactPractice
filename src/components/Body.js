import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
    let [resturantList, setresturantList] = useState([]); //Array destructuring
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    let [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4833526&lng=78.3870668&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        // optional chaining
        setresturantList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    // Conditional Rendering
    if (resturantList.length === 0) {
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="filterbtn">
                <div className="search-container">
                    <input type="text" className="search" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={() => {
                        const searchList = resturantList.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        })
                        setFilteredRestaurant(searchList);

                    }}>Search</button>
                </div>
                <button className="btn filter-btn" onClick={() => {
                    let filteredResList = resturantList.filter((res) => {
                        return res.info.avgRating > 4
                    })
                    setresturantList(filteredResList);
                }}>Resurant Filter</button>
            </div>
            <div className="resturant-container">
                {
                    filteredRestaurant.map((resturant) => {
                        return <Link key={resturant.info.id} to={"/resturants/" + resturant.info.id}><ResturantCard resData={resturant} /></Link>
                    })
                }
            </div>
        </div>
    )
}

export default Body;