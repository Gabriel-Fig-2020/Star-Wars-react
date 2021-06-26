import React, { Component }  from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import StarWars from './components/StarWars/StarWars';
import cuid from 'cuid';
 

class App extends Component {

  state = {
    posts: [
      {
        id: 1,
        text: 'Hello World'
      },
      {
        id: 2,
        text: 'Hello Again'
      },
      {
        id: 3,
        text: 'Bye'
      },
    ],
    showPosts: false
   }

   showPostsHandler = () => {
     const show = this.state.showPosts
     this.setState({showPosts: !show})
     console.log(show)
   }

   addPost = (text) =>{
    console.log("Create "+ {text})
    const new_post = {
      id: cuid(),
      text: text,
    }
    const posts = [...this.state.posts, new_post]
    this.setState({posts:posts})
}

  deletePostHandler = (id) => {
    console.log(id)
    let posts = [...this.state.posts ]
    posts = posts.filter(post => post.id !== id)
    this.setState({posts})
  }

  render() {
    return (

        <Container >
          <PostForm add={this.addPost}/>
          <hr />
          <PostList posts={this.state.posts} 
          status={this.state.showPosts}
          showOnClick={this.showPostsHandler}
          delOnClick={this.deletePostHandler}
          />
          <hr />
          <StarWars />
        </Container>

    );
  }
}

export default App;
