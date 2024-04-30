import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="heading">JSX Heading</h1>

const FunctionalComponentHeading = () => {
    return (<div className="container">
        {heading}
        <h2>Functional Component Heading</h2>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FunctionalComponentHeading />);