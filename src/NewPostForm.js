import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';

class NewPostForm extends Component {
  state = {
    title: '',
    text: ''
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
    console.log(this.state.title);
    console.log(this.state.text);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    let newPost = {
      title: this.state.title,
      text: this.state.text,
      id: uuidv1()
    };
    this.props.createPost(newPost);
    this.setState({
      title: '',
      text: ''
    });
  };

  render() {
    return (
      <div>
        <h3>Create New Post:</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="body">Body</label>
            <input
              type="text"
              id="body"
              name="body"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewPostForm;
