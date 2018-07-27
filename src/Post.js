import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div>
        <li>
          <h1>{this.props.title}</h1>
          <h2>{this.props.body}</h2>
        </li>
      </div>
    );
  }
}

export default Post;
