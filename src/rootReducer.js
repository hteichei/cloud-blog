import uuidv1 from 'uuid/v1';

const INITIAL_STATE = {
  posts: [
    {
      title: 'First Title',
      body: 'First Post',
      // isEditing: false,
      id: uuidv1()
    }
  ]
};

export default function rootReducer(state = INITIAL_STATE, action) {
  if (action.type === 'CREATE_POST') {
    return {
      ...state,
      posts: [
        ...state.posts,
        {
          title: action.title,
          body: action.body,
          // isEditing: action.isEditing,
          id: uuidv1()
        }
      ]
    };
  } else if (action.type === 'REMOVE_POST') {
    const updatedPosts = state.posts.filter(post => post.id !== action.id);
    return { ...state, posts: updatedPosts };
    // } else if (action.type === 'TOGGLE_EDIT') {
    //   const toggledPost = state.posts.map(post => {
    //     if (post.id === action.id) {
    //       return {
    //         ...post,
    //         isEditing: !post.isEditing
    //       };
    //     }
    //     return post;
    //   });
    //   return { ...state, posts: toggledPost };
  } else if (action.type === 'EDIT_POST') {
    const updatedPost = state.posts.map(post => {
      if (post.id === action.id) {
        return {
          ...post,
          title: action.title,
          body: action.body,
          // isEditing: action.isEditing,
          id: action.id
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
