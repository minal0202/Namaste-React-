import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { restaurants } from "./utils/restaurantMockData";

const AppComponent = () => {
    return (
        <div className="application"><Header /><Body restaurants={restaurants} /></div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);