import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  render() {
    const posts = this.props.posts.map(post => {
      return <Post key={post.id} title={post.title} body={post.text} />;
    });
    return (
      <div>
        <h1>Mini-Blog</h1>
        <ul>{posts}</ul>
      </div>
    );
  }
}

export default PostList;
