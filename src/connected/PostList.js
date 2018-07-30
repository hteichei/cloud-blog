import React, { Component } from 'react';
import Post from '../components/Post';
import { connect } from 'react-redux';
import { fetchPosts, removePosts } from '../actionCreators';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  handleDelete = id => {
    this.props.removePosts(id);
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
  { fetchPosts, removePosts }
)(PostList);
