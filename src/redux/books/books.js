import {
  DELETE_BOOK,
  FETCH_BOOK_FAILLED,
  FETCH_BOOK_SUCCESS,
  FETCH_REQUEST,
  POST_BOOK,
} from '../../api/ApiHelpers';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_BOOK_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case FETCH_BOOK_FAILLED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case DELETE_BOOK:
      return {
        ...state,
        items: [...state.items].filter((s) => s.item_id !== action.payload),
        loading: false,
      };
    case POST_BOOK:
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
      };
    default:
      return state;
  }
};

export default bookReducer;
