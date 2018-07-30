import React, { Component } from 'react';
import './NewPostForm.css';
import { connect } from 'react-redux';
import Form from 'react-bootstrap';
import { postPosts } from '../actionCreators';

class NewPostForm extends Component {
  state = {
    title: '',
    body: ''
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.postPosts(this.state);
    evt.target.reset();
    this.setState({
      title: '',
      body: ''
    });
  };

  render() {
    return (
      <div>
        <h3>Create New Post:</h3>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="body"
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
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { postPosts }
)(NewPostForm);
