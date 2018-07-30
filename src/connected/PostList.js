import React, { Component } from 'react';
import Post from '../components/Post';
import { connect } from 'react-redux';
import EditablePost from './EditablePost';

class PostList extends Component {
  handleDelete = id => {
    this.props.dispatch({
      type: 'REMOVE_POST',
      id
    });
  };

  toggleEditing = id => {
    this.props.dispatch({
      type: 'TOGGLE_EDIT',
      id
    });
  };

  render() {
    const posts = this.props.posts.map(post => {
      if (post.isEditing === false) {
        return (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
            removePost={() => this.handleDelete(post.id)}
            toggleEdit={() => this.toggleEditing(post.id)}
          />
        );
      } else {
        return <EditablePost post={post} key={post.id} />;
      }
    });
    return (
      <div>
        <div>{posts}</div>
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

export default connect(mapStateToProps)(PostList);
