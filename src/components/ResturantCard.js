import { CDN_URL } from "../utils/constants"

const ResturantCard = (props) => {
    // const { resName, cuisine, rating, deliveryTime } = props => Object Destructuring
    const { resData } = props
    const { cloudinaryImageId, name, cuisines, avgRating } = resData.info
    const { deliveryTime } = resData.info.sla
    return (
        <div className="resturant-card">
            <img src={CDN_URL + cloudinaryImageId} alt="resturant-logo" className="resturant-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime + "min"}</h4>
        </div>
    )
}

export default ResturantCard;