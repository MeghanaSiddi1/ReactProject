import React from "react";
import ReactDOM from "react-dom/client";

// const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Welcome World from React!");
// console.log(heading); // object
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // convert object to h1 tag

const heading = React.createElement("h1",{id:"heading"},"Namaste React 🚀");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // Here parent object replaces whatever is there in the root div in HTML

console.log(heading);

//JSX

const JSXheading = <h1 id="heading">Namaste React using JSX🚀</h1>
console.log(JSXheading);