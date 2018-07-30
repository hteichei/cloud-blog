import React, { Component } from 'react';
import Button from 'react-bootstrap';
import EditablePost from '../connected/EditablePost';

class Post extends Component {
  state = {
    title: '',
    body: '',
    isEditing: false
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.dispatch({
      type: 'EDIT_POST',
      title: this.state.title,
      body: this.state.body,
      id: this.props.id
    });
    evt.target.reset();
    this.setState({
      title: '',
      body: '',
      isEditing: false
    });
  };

  handleToggle = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  render() {
    if (!this.state.isEditing) {
      return (
        <div>
          <div>
            <h1>{this.props.title} </h1>
            <p>{this.props.body}</p>
            <button onClick={this.props.removePost}>Remove</button>
            <button onClick={this.handleToggle}>Edit</button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Edit Post:</h3>
          <form className="form-group" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="body">Body</label>
              <input
                type="body"
                id="body"
                name="body"
                value={this.state.body}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <button>Update</button>
          </form>
        </div>
      );
    }
  }
}

export default Post;
