const heading = React.createElement('div', { id: "container" }, [
    React.createElement('div', { id: "child1" }, [React.createElement('h1', { className: 'heading1' }, "This is Heading1"), React.createElement('h2', { className: "heading2" }, "This is Heading2")]), React.createElement('div', { id: "child1" }, [React.createElement('h3', { className: "heading3" }, "This is Heading3"), React.createElement('h4', { className: "heading4" }, "This is heading4")])
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);