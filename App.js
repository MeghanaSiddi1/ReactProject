import React from "react";
import ReactDOM from "react-dom/client";

//JSX (It is ranspiled before it reaches the JS) - With the help of Babel which is dependency of Parcel

// JSX => Babel conversts to React.CreateElement => Which is React Element. React Elemnet is nothing but JS object. render() renders that JS object to actual HTML element. 


const heading = (<h1 id="heading" tabIndex="5" className="heading">Namaste React using JSX🚀</h1>);
console.log(heading);

// React Functional Component

const HeadingComponent = () => {
  return <h1 className="heading">Namaste React Functional Component</h1>
}

// const HeadingComponent2 = () => (<h1 className="heading">Namaste React Functional Component</h1>);

// HeadingComponent and HeadingComponent2 compoents are both same but change in syntax.


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // Here heading object replaces whatever is there in the root div in HTML