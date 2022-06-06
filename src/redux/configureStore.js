import { createStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoryReducer,
});
const store = createStore(rootReducer);

export default store;
