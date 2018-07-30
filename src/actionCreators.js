import axios from 'axios';

export function fetchPosts() {
  return async function(dispatch) {
    const response = await axios.get('http://localhost:3000/api/posts');
    return dispatch({ type: 'FETCH_POSTS', posts: response.data });
  };
}

export function postPosts(post) {
  return async function(dispatch) {
    const response = await axios.post('http://localhost:3000/api/posts', post);
    return dispatch({
      type: 'CREATE_POST',
      post: response.data
    });
  };
}

export function removePosts(id) {
  return async function(dispatch) {
    await axios.delete(`http://localhost:3000/api/posts/${id}`);
    return dispatch({
      type: 'REMOVE_POST',
      id
    });
  };
}

export function updatePosts(id, updatedPost) {
  return async function(dispatch) {
    const response = await axios.patch(
      `http://localhost:3000/api/posts/${id}`,
      updatedPost
    );
    console.log(response.data);
    return dispatch({
      type: 'EDIT_POST',
      updatedP: response.data
    });
  };
}
