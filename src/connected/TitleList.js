import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';

class TitleList extends Component {
  handleDelete = id => {
    this.props.dispatch({
      type: 'REMOVE_POST',
      id
    });
  };
  render() {
    const titles = this.props.posts.map(post => {
      return (
        <Post
          key={post.id}
          title={post.title}
          removePost={() => this.handleDelete(post.id)}
        />
      );
    });
    return (
      <div>
        <div>{titles}</div>
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

export default connect(mapStateToProps)(TitleList);
