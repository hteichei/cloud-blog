import React, { Component } from 'react';
import PostList from '../connected/PostList';
import NewPostForm from '../connected/NewPostForm';
import TitleList from '../connected/TitleList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 id="title">Mini-Blog</h1>
        <div className="container">
          <PostList />
          <hr />
          <NewPostForm />
        </div>
        <div className="container">
          <h1>Table of Contents:</h1>
          <TitleList />
        </div>
      </div>
    );
  }
}

export default App;
