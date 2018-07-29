import React, { Component } from 'react';
import './NewPostForm.css';
import { connect } from 'react-redux';
import Form from 'react-bootstrap';

class NewPostForm extends Component {
  state = {
    title: '',
    text: '',
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
      type: 'CREATE_POST',
      title: this.state.title,
      body: this.state.text,
      isEditing: false
    });
    evt.target.reset();
    this.setState({
      title: '',
      text: ''
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
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="text">Body</label>
            <input
              type="text"
              id="text"
              name="text"
              value={this.state.text}
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

export default connect()(NewPostForm);
