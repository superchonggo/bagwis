import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: "Burr, it's cold",
        iconName: 'snowflake'
    }
}


const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    // const display = seasonConfig[season];
    // const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
    // const icon = season === 'winter' ? 'snowflake' : 'sun'

    const { text, iconName } = seasonConfig[season];
    
    return (<div>
        <i className={`${iconName} icon` }></i>
        <h1>{text}</h1>
        <i className={`${iconName} icon` }></i>
        </div>);
}

export default SeasonDisplay;