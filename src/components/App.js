import React from 'react';
import PostList from './PostList';

const App = () => {
    return (
        <div
            className="ui container"
            style={{backgroundColor: 'grey'}}
        >
            <PostList/>
        </div>
    );
};

export default App;