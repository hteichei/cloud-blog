import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap';

class EditablePost extends Component {
  state = {
    title: '',
    body: '',
    isEditing: true
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
      isEditing: false,
      id: this.props.post.id
    });
    evt.target.reset();
    this.setState({
      title: '',
      body: ''
    });
  };

  render() {
    // debugger;
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

const mapStateToProps = function(reduxState) {
  return {
    // state comes from the Redux store
    posts: reduxState.posts
  };
};

export default connect(mapStateToProps)(EditablePost);
