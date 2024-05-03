import ResturantCard from "./ResturantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
    let [resturantList, setresturantList] = useState(resList); //Array destructuring
    return (
        <div className="body">
            <div className="filterbtn">
                <button className="btn filter-btn" onClick={() => {
                    let filteredResList = resturantList.filter((res) => {
                        return res.info.avgRating > 4
                    })
                    setresturantList(filteredResList);
                }}>Resurant Filter</button>
            </div>
            <div className="resturant-container">
                {
                    resturantList.map((resturant) => {
                        return <ResturantCard key={resturant.info.id} resData={resturant} />
                    })
                }
            </div>
        </div>
    )
}

export default Body;