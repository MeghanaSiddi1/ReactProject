import React from "react";
import ReactDOM from "react-dom/client";

//JSX (It is ranspiled before it reaches the JS) - With the help of Babel which is dependency of Parcel

// JSX => Babel conversts to React.CreateElement => Which is React Element. React Elemnet is nothing but JS object. render() renders that JS object to actual HTML element.

// Functional components cxan also be written in normal JS function syntax, not necessarily to be arrow functions

const Title = () =>(
  <h1 id="title" tabIndex="5" className="title">    
    Namaste React using JSX🚀
  </h1>
);

// Component Composition -> composing 2 components into one another (or) calling one component into another Component



const HeadingComponent = () => (
  <div id="container">
    {/* {Title()} */}
    <Title/>
    {/* <Title></Title>   */}
    <h1 className="heading">Namaste React Functional Component</h1>   
  </div>
);

// HeadingComponent and HeadingComponent2 compoents are both same but change in syntax.

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // Here it is for JSX/ React elemt.Here heading object replaces whatever is there in the root div in HTML

root.render(<HeadingComponent />);
