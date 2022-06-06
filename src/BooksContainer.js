import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Books from './components/Books';
import InputBook from './components/InputBook';
import { deleteBook } from './redux/books/books';

const BooksContainer = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div className="display__books">
      {
        books.map((book) => (
          <Books
            key={book.id}
            author={book.author}
            title={book.title}
            handleClick={() => handleClick(book.id)}
          />
        ))
      }
      <div className="separator" />
      <h3>ADD NEW BOOK</h3>
      <InputBook />
    </div>
  );
};

export default BooksContainer;
