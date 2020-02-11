import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './fxn/CommentDetail';
import ApprovalCard from './fxn/ApprovalCard';
import Message from './fxn/Message';
import Segment from './fxn/Segment';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">                        

            <Message headerMessage="Test Header" bodyMessage="Body Message"></Message>
            <Segment>The quick brown fox jumps over the lazy dog.</Segment>

            <ApprovalCard>
                <h3>Warning!</h3>
                <div>Are you sure want to do this?</div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Paul" avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
