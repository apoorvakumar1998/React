import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
// const heading = React.createElement(
//   "div",
//   {
//     className: "parent",
//   },
//   React.createElement(
//     "div",
//     {
//       className: "child",
//     },
//     [
//       React.createElement("h1", {}, "I am a h1"),
//       React.createElement("h2", {}, "I am a h2"),
//     ]
//   )
// );

// let jsxElement = (
//   <div className="heading">
//     <h1 className="parent">Hello from JSX</h1>
//   </div>
// );

// // react component
// const number = 10;
// const arr = [1, 2, 3, 4,];
// const HeadingComponent = () => (
//   <div className="heading">
//     <div className="child">Component</div>
//   </div>
// );

// Component Composition
// const MainComponent = () => {
//   return (
//     <div>
//       <HeadingComponent />
//       <h1>{jsxElement}</h1>
//       <h2 className="class-number" style={{ color: 'yellow', border: '1px solid red' }}>{number}</h2>
//       <h1>Body</h1>
//       <div>{
//         arr.map(data => (
//           <div>{data}</div>
//         )
//         )}
//       </div>
//     </div>
//   )
// }

const AppComponent = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxElement);
root.render(<AppComponent />);
