const INITIAL_STATE = {
  posts: []
};

export default function rootReducer(state = INITIAL_STATE, action) {
  if (action.type === 'CREATE_POST') {
    return {
      posts: [...state.posts, action.post]
    };
  } else if (action.type === 'REMOVE_POST') {
    const updatedPosts = state.posts.filter(post => post.id !== action.id);
    return { ...state, posts: updatedPosts };
  } else if (action.type === 'EDIT_POST') {
    const updatedPost = state.posts.map(post => {
      if (post.id === action.id) {
        return {
          ...post,
          title: action.title,
          body: action.body
        };
      }
      return post;
    });
    return { ...state, posts: updatedPost };
  } else if (action.type === 'FETCH_POSTS') {
    return { ...state, posts: action.posts };
  }
  return state;
}
