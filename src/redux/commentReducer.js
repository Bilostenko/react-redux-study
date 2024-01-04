import { COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DELETE, COMMENT_LOAD } from './types';

const initialState = {
  comments: []
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data]
      };
    case COMMENT_DELETE:

      const filteredComments = state.comments.filter(comment => comment.id !== action.id);
      return {
        ...state,
        comments: filteredComments
      };
    case COMMENT_UPDATE:
      const index = state.comments.findIndex(comment => comment.id === action.data.id);
      const updatedComments = [
        ...state.comments.slice(0, index),
        action.data,
        ...state.comments.slice(index + 1)
      ];
      return {
        ...state,
        comments: updatedComments
      };
      
      case COMMENT_LOAD:
        const commentsNew = action.data.map(res => {
          return {
            text: res.name,
            id: res.id
          }
        })
        return {
          ...state,
         comments: commentsNew
        }

    default:
      return state;
  }
};
