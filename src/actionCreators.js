import axios from 'axios';
import thunk from 'redux-thunk';

export function fetchPosts() {
  return async function(dispatch) {
    const response = await axios.get('http://localhost:3000/api/posts');
    return dispatch({ type: 'FETCH_POSTS', posts: response.data });
  };
}
