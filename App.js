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

const RestaurantCard = (props) =>{ 
  // Instead of props(in above line) here you can destructure on the fly here and can use directly. {resName, cuisine}
  console.log(props);
  // const {resName,cuisine} = props;
  return (
    <div className="res-card" style={{padding:"10px",backgroundColor:"#f0f0f0"}}>
      <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/9/7/678cb386-5320-4980-8328-255723f659f2_d704d0e6-3703-41a0-bdb9-301064234038.JPG" />
      <h3 style={style}>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h5>4.4 star</h5>
      <h5>38 minutes</h5>
      
    </div>
  )
}

const Body = () =>{
  return (<div className="body">
    <div className="search">Search</div>
    <div className="res-container">      
      <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>
      <RestaurantCard resName="KFC" cuisine="Burgers, Fast Food" />
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
