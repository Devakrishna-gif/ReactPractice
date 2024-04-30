import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement('h1', {}, "Without CDN Links")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);