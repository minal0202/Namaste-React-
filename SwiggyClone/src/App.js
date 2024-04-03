import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { restaurants } from "./utils/restaurantMockData";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import About from './components/About';
import Error from "./components/Error";
import RestaurantDetailCard from "./components/RestaurantDetailCard";

const AppComponent = () => {
    return (
        <div className="application"><Header /><Outlet /></div>
    )
}

const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <AppComponent />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body restaurants={restaurants} />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantDetailCard />
            }
        ]
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routerConfig} />);