import {Form, Button} from 'react-bootstrap'
import React, { Component } from 'react';

class PostForm extends Component {
    state= { 
        post: '',
    }

    handlerPostChange = (event) =>{
        console.log(event.target.value)
        this.setState({post: event.target.value})
    }

    handlerPostCreate = (event) =>{
        event.preventDefault()
        alert('submited')
        const post = this.state.post
        if (post.length > 3){
            this.props.add(post)
            this.setState({post: ''})
        }
    }


        render(){
        return(
            <Form onSubmit={this.handlerPostCreate}>
                <h3>Create a post</h3>
                <input type="text" 
                className="form-control" 
                value={this.state.post}
                onChange={this.handlerPostChange}/>
                <Button type="submit" className="mt-2" 
                variant='info'
                >Submit</Button>
            </Form >
        );
    };
};
export default PostForm;

