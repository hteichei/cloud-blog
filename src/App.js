import React, { Component } from 'react';
import PostList from './PostList.js';
import NewPostForm from './NewPostForm.js';

class App extends Component {
  state = {
    posts: []
  };

  addPost = newPost => {
    this.setState({
      posts: [...this.state.posts, newPost]
    });
  };

  render() {
    return (
      <div>
        <h1>Mini-Blog</h1>
        <PostList posts={this.state.posts} />
        <hr />
        <NewPostForm createPost={this.addPost} />
      </div>
    );
  }
}

export default App;
