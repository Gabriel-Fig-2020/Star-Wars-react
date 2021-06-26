
import React from 'react';
import { Button } from 'react-bootstrap';
import Post from './Post';

const PostList = (props) => {

        return(
            <React.Fragment>
                <Button onClick={props.showOnClick} 
                variant="primary">
                    {!props.status? 'Show posts' : 'Hide Posts'}</Button>

                {props.status && props.posts.map(element => {
                    return <Post p={element} 
                            key={element.id}
                            delete={ props.delOnClick }
                            />
                })
                }
            </React.Fragment>
        );
};

export default PostList ;