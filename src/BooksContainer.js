import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import Books from './components/Books';
import InputBook from './components/InputBook';
import { deleteBook, getBooks } from './api/ApiHelpers';

const BooksContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const state = useSelector((state) => state.books);
  const handleClick = (itemId) => {
    dispatch(deleteBook(itemId));
  };

  const renderBooks = () => {
    if (state.error !== null) return <h1>Failled to load books. Please, verify the API url</h1>;
    return state.items.map((book) => (
      <Books
        key={book.item_id}
        author={book.author}
        title={book.title}
        handleClick={() => handleClick(book.item_id)}
      />
    ));
  };
  return (
    <div className="display__books">
      {renderBooks()}
      <ClipLoader loading={state.loading} size={50} />
      <div className="separator" />
      <h3>ADD NEW BOOK</h3>
      <InputBook />
    </div>
  );
};

export default BooksContainer;
