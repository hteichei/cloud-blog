import React, { Component } from 'react';
import Post from '../components/Post';
import { connect } from 'react-redux';
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

  render() {
    const posts = this.props.posts.map(post => {
      return (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          id={post.id}
          removePost={() => this.handleDelete(post.id)}
        />
      );
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
