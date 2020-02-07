// import react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
    // return <div>Hi there!</div>;
    const buttonText = { text: 'Click me!'};
    const labelText = 'Enter name: ';

    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
        </div>

    );
}

// take the react component, show in screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);