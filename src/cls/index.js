import React from 'react';
import ReactDOM from 'react-dom';

// import SeasonDisplay from './SeasonDisplay';
// const x = navigator.geolocation.getCurrentPosition( function(position) {
//     console.log(position.coords.latitude)
//     console.log(position.coords.longitude)
// } );

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {                
                this.setState({ lat: position.coords.latitude });
            },
            (err) => console.log(err)
        );
    }

    render() {    
        return <div>Latitude: {this.state.lat}</div>;
    }
}

function doOutput(position) {
    if (position.coords.latitude > 0) {
        console.log('north hemisphere');
    } else {
        console.log('south hemisphere');
    }

    if (position.coords.longitude > 0) {
        console.log('east');
    } else {
        console.log('west');
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));


