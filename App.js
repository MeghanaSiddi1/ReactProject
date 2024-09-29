import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Links
 * Body
 * - Search
 * - Restaurant Conatiner
 *   - Restaurant Card
 *    - Image
 *    - Name of res, star rating, cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Conatcts
 */

const Header = () =>{
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src = "https://cdn6.f-cdn.com/contestentries/1318421/28372416/5aedd3a7adb01_thumb900.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Conatct Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const style = {textDecoration:"underLine"}

const RestaurantCard = ({resData}) =>{ 
  // Instead of props(in above line) here you can destructure on the fly here and can use directly. {resName, cuisine}
  // console.log(props);
  // const {resData} = props;
  console.log("resdata info name", resData.info.cuisines);
  return (
    <div className="res-card" style={{padding:"10px",backgroundColor:"#f0f0f0"}}>
      <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} />
      <h3 style={style}>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h5>{resData.info.avgRating}</h5>
      <h5>{resData.info.costForTwo}</h5>     
      <h5>{resData.info.sla.deliveryTime} minutes</h5> 
    </div>
  )
}

const resObj={
  info: {
    id: "80802",
    name: "Third Wave Coffee",
    cloudinaryImageId: "d96267738c19ec62acb5390e52faba41",
    locality: "Sadashiva Nagar",
    areaName: "Sadashiva Nagar",
    costForTwo: "₹400 for two",
    cuisines: [
      "Beverages",
      "Bakery",
      "Continental"
    ],
    avgRating: 4.6,
    parentId: "274773",
    avgRatingString: "4.6",
    totalRatingsString: "4.7K+",
    sla: {
      deliveryTime: 36,
      lastMileTravel: 5.9,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "5.9 km",
      iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
      nextCloseTime: "2024-09-30 01:00:00",
      opened: true
    },
    badges: {
      imageBadges: [
        {
          imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
          description: "Delivery!"
        },
        {
          imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
          description: "Delivery!"
        }
      ],
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C"
        }
      ]
    },
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png"
              }
            },
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
              }
            }
          ]
        },
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available"
              }
            }
          ]
        }
      }
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {}
      }
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.5",
        ratingCount: "2.1K+"
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/city/bangalore/third-wave-coffee-sadashiva-nagar-rest80802",
    type: "WEBLINK"
  }
};


const Body = () =>{
  return (<div className="body">
    <div className="search">Search</div>
    <div className="res-container">      
      <RestaurantCard resData={resObj}/>     
    </div>
  </div>)
}

const AppLayout = () => {
  return (<div className="app">
    <Header/>
    <Body/>
  </div>)
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
