import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
// import About from './components/About';
import Error from "./components/Error";
import RestaurentDetails from "./components/RestaurentDetails";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from "./utils/UserContext";
import { Provider } from 'react-redux';
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Shimmer from './components/Shimmer';
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

const About = lazy(() => import('./components/About'));
const AppComponent = () => {

  const [userName, setUserName] = useState();

  useEffect(() => {
    setUserName('Apoorva Kumar');
  }, [])

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ userName: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  )
}

const appRoutes = createBrowserRouter([
  {
    path: '',
    element: <AppComponent />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Body />
      },
      {
        path: 'about',
        element: <Suspense fallback={<Shimmer />}><About /></Suspense>
      },
      {
        path: 'restaurent/:resId',
        element: <RestaurentDetails />
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxElement);
root.render(
  <RouterProvider router={appRoutes} />);
