import { COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DELETE } from './types';

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
        // перевірити
      case COMMENT_DELETE:
        const deletedComments = [
          ...state.comments.slice(0, index),
          action.data,
          ...state.comments.slice(index + 1)
        ];
        return {
          ...state,
          comments: deletedComments
        };
    default:
      return state;
  }
};
