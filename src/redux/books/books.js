const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const addBook = (payload) => ({ type: ADD_BOOK, payload });
export const deleteBook = (payload) => ({ type: REMOVE_BOOK, payload });

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case REMOVE_BOOK:
      return [...state].filter((s) => s.id !== action.payload);
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
};

export default bookReducer;
