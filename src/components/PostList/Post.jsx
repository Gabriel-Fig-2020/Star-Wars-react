import React from 'react';
import { Button } from 'react-bootstrap';


const Post = (props) => {
        return(
            <React.Fragment >
                <h1>{ props.p.text }</h1>
                <Button className="btn-danger" 
                onClick={()=>props.delete(props.p.id)}>Delete</Button>
            </React.Fragment>
        );
    };

export default Post ;