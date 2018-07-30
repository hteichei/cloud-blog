import React, { Component } from 'react';
import PostList from '../connected/PostList';
import NewPostForm from '../connected/NewPostForm';
import TitleList from '../connected/TitleList';
import './App.css';
import Navbar from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div id="super">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <h1 id="title">Mini-Blog</h1>
        <div className="container">
          <div className="row">
            <div col col-lg-2>
              <div id="PostListcontainer" className="myContainer">
                <PostList />
              </div>
            </div>
            <div col col-lg-6>
              <div className="myContainer">
                <NewPostForm />
              </div>
            </div>
          </div>
          <div id="TitleListcontainer" className="myContainer">
            <h1>Table of Contents:</h1>
            <TitleList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
