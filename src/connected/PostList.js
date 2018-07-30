import React, { Component } from 'react';
import Post from '../components/Post';
import { connect } from 'react-redux';
import EditablePost from './EditablePost';
import { fetchPosts } from '../actionCreators';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

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

  // handleUpdate = id => {
  //   this.props.dispatch({
  //     type: 'EDIT_POST',
  //     id
  //   });
  // };

  render() {
    const posts = this.props.posts.map(post => {
      return (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          removePost={() => this.handleDelete(post.id)}
          // toggleEdit={() => this.toggleEditing(post.id)}
        />
      );
      // } else {
      //   return <EditablePost post={post} key={post.id} />;
      // }
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

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
