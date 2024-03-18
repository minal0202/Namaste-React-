import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", { id: "heading1" }, "I'm a h1 tag!"),
        React.createElement("h2", { id: "heading2" }, "I'm a h2 tag!")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", { id: "heading3" }, "I'm a h1 tag!"),
        React.createElement("h2", { id: "heading4" }, "I'm a h2 tag!")
    ])
])
root.render(parent);

