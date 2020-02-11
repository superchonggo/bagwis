import React from 'react';

const Message = props => {

    return (
        
        <div className="ui message">
            <div className="header">{props.headerMessage}</div>
            <p>{props.bodyMessage}</p>
        </div>

    );

}

export default Message;