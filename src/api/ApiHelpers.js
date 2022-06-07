import axios from 'axios';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
export const FETCH_BOOK_FAILLED = 'FETCH_BOOK_FAILLED';
export const POST_BOOK = 'POST_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';

const fetchBooksRequest = () => ({ type: FETCH_REQUEST });
const fetchBooksSuccess = (payload) => ({ type: FETCH_BOOK_SUCCESS, payload });
const fetchBooksFailled = (payload) => ({ type: FETCH_BOOK_FAILLED, payload });
const postBooksSuccess = (payload) => ({ type: POST_BOOK, payload });
const deleteBookSuccess = (payload) => ({ type: DELETE_BOOK, payload });

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/5YW2OgDLnSBnM7Xf2ZfG/books';

export const getBooks = () => async (dispatch) => {
  dispatch(fetchBooksRequest());
  try {
    const response = await axios.get(url);
    const data = await response.data;
    const books = [];
    Object.entries(data).forEach((d) => {
      books.push({
        item_id: d[0],
        ...d[1][0],
      });
    });
    dispatch(fetchBooksSuccess(books));
  } catch (error) {
    dispatch(fetchBooksFailled(error));
  }
};

export const postBook = (body) => async (dispatch) => {
  dispatch(fetchBooksRequest());
  try {
    await axios.post(url, body);
    dispatch(postBooksSuccess(body));
  } catch (error) {
    dispatch(fetchBooksFailled(error));
  }
};

export const deleteBook = (itemId) => async (dispatch) => {
  dispatch(fetchBooksRequest());
  try {
    await axios.delete(`${url}/${itemId}`);
    dispatch(deleteBookSuccess(itemId));
  } catch (error) {
    dispatch(fetchBooksFailled(error));
  }
};
