import React from 'react';
import ReactDOM from 'react-dom/client';

const TitleComponent = () => <h1 className='title'>Component Composotion</h1>

const HeadingComponent = () => {
    return (
        <div className='container'>
            <TitleComponent />
            <h1 className='heading'>Functional Component</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);