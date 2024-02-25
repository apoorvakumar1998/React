import React, { Component } from "react";
import ReactDOM from "react-dom/client";

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

// // Component Composition
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


const resList = [
  {
    name: 'Meghana Foods',
    cuisine: 'Biryani',
    star: '4.4 stars',
    ETA: '30 mins',
    logo: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa-recipe.jpg'
  },
  {
    name: 'KFC',
    cuisine: 'burger',
    star: '4.1 stars',
    ETA: '32 mins',
    logo: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa-recipe.jpg'
  },
  {
    name: 'Udupi',
    cuisine: 'chikranna',
    star: '4.1 stars',
    ETA: '13 mins',
    logo: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa-recipe.jpg'
  },
  {
    name: 'Ironhill',
    cuisine: 'cocktail',
    star: '4.1 stars',
    ETA: '45 mins',
    logo: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa-recipe.jpg'
  },
  {
    name: 'Rameshwaram',
    cuisine: 'dose',
    star: '1.1 stars',
    ETA: '100 mins',
    logo: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa-recipe.jpg'
  },
  {
    name: 'Rameshwaram',
    cuisine: 'dose',
    star: '1.1 stars',
    ETA: '100 mins',
    logo: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa-recipe.jpg'
  },
  {
    name: 'Rameshwaram',
    cuisine: 'dose',
    star: '1.1 stars',
    ETA: '100 mins',
    logo: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa-recipe.jpg'
  }];

const HeadingComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://w7.pngwing.com/pngs/664/210/png-transparent-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo-uber-eats.png" alt="Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurentCard = (prop) => {
  return (
    <div className="res-card">
      <div className="res-logo">
        <img className="res-logo" alt="logo" src={prop.data.logo}></img>
      </div>
      <div className="res-body">
        <h3>{prop.data.name}</h3>
        <h3>{prop.data.cuisine}</h3>
        <h3>{prop.data.star}</h3>
        <h3>{prop.data.ETA}</h3>
      </div>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">Search</div>
      <div className="res-wrapper">
        {resList.map((data, index) => <RestaurentCard key={index} data={data} />)}
      </div>
    </div>

  )
}

const AppComponent = () => {
  return (
    <div className="app">
      <HeadingComponent />
      <Body />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxElement);
root.render(<AppComponent />);
