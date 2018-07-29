import React, { Component } from 'react';
import Button from 'react-bootstrap';

class Post extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>{this.props.title} </h1>
          <p>{this.props.body}</p>
          <button onClick={this.props.removePost}>Remove</button>
          <button onClick={this.props.toggleEdit}>Edit</button>
        </div>
      </div>
    );
  }
}

export default Post;
