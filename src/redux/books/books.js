const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const addBook = (payload) => ({ type: ADD_BOOK, payload });
export const deleteBook = (payload) => ({ type: REMOVE_BOOK, payload });

const books = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear' },
  { id: 2, title: 'Siddartha', author: 'Hermann Hesse' },
  { id: 3, title: 'The effective Executive', author: 'Peter Drucker' },
];

const bookReducer = (state = books, action) => {
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
