import React from "react";
import ReactDOM from "react-dom/client";

// const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Welcome World from React!");
// console.log(heading); // object
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // convert object to h1 tag

const heading = React.createElement("h1",{id:"heading"},"Namaste React 🚀");
const root = ReactDOM.createRoot(document.getElementById("root"));


console.log(heading);

//JSX (It is ranspiled before it reaches the JS) - With the help of Babel which is dependency of Parcel

// JSX => Babel conversts to React.CreateElement => Which is React Element. React Elemnet is nothing but JS object. render() renders that JS object to actual HTML element. 

const JSXheading = (<h1 id="heading" tabIndex="5" className="heading">Namaste React using JSX🚀</h1>);
console.log(JSXheading);

root.render(JSXheading); // Here parent object replaces whatever is there in the root div in HTML