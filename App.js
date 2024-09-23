import React from "react";
import ReactDOM from "react-dom/client";

// const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Welcome World from React!");
// console.log(heading); // object
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // convert object to h1 tag

const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement(
    "div",
    { id: "child1" },
    [React.createElement("h1", {}, "Iam an h1 tag"),React.createElement("h2",{},"Iam a h2 tag")]
  ), React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "Iam an h1 tag"),React.createElement("h2",{},"Iam a h2 tag")]
  )]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // Here parent object replaces whatever is there in the root div in HTML
