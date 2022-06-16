import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="Nice blog post" avatar={faker.image.image()} />
            </ApprovalCard>
            <CommentDetail author="Alex" timeAgo="Today at 2:00PM" content="Very nice post" avatar={faker.image.image()} />
            <CommentDetail author="Jane" timeAgo="Yesterday at 10:00AM" content="Great post" avatar={faker.image.image()} />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))