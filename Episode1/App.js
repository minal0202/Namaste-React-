import React from "react";
import ReactDOM from "react-dom/client";

// React Element using createElement 
const heading = React.createElement('h1', { "id": "headding" }, "Namaste React");

const root = ReactDOM.createRoot(document.getElementById("root"));

// React Element using JSX 
const jsxHeading = <h1>Namaste React from JSX</h1>;

// React Functional Component 
const Title = () => <h1 id="heading">Namaste React</h1>;

// Functional Composition
const Container = () => (
    <div id="container">
        <Title />
        <h1 className="heading">Another heading</h1>
    </div>);

root.render(<Container />);
