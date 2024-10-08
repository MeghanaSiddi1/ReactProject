import {CDN_URL} from "../utils/constants"
const RestaurantCard = ({resData}) =>{ 
  // Instead of props(in above line) here you can destructure on the fly here and can use directly. {resName, cuisine}
  // console.log(props);
  // const {resData} = props;
  const style = {textDecoration:"underLine"}
const {name,sla,cuisines,avgRating,costForTwo} = resData?.info;

  return (
    <div className="res-card" style={{padding:"10px",backgroundColor:"#f0f0f0"}}>
      <img className="res-logo" alt="res-logo" src={ CDN_URL+resData.info.cloudinaryImageId} />
      <h3 style={style}>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>     
      <h5>{sla.deliveryTime} minutes</h5> 
    </div>
  )
}

export default RestaurantCard;