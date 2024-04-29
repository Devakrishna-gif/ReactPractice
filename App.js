import React from 'react';
import ReactDOM from 'react-dom/client';

const Parent = React.createElement('div', { id: "parent" }, [React.createElement('div', { id: "child1" }, [React.createElement('h1', { id: "heading" }, 'This is h1 Tag'), React.createElement('h2', { id: "heading" }, 'This is h2 Tag')]), React.createElement('div', { id: "child2" }, [React.createElement('h3', { id: "heading" }, 'This is h3 Tag'), React.createElement('h4', { id: "heading" }, 'This is h4 Tag')])])
console.log(Parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Parent);