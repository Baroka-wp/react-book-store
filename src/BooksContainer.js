import React from 'react';
import Books from './components/Books';
import InputBook from './components/InputBook';

const BooksContainer = () => {
  const books = [
    { id: 1, title: 'Atomic Habits', author: 'James Clear' },
    { id: 2, title: 'Siddartha', author: 'Hermann Hesse' },
    { id: 3, title: 'The effective Executive', author: 'Peter Drucker' },
  ];
  return (
    <div className="display__books">
      {
        books.map((book) => (
          <Books
            key={book.id}
            author={book.author}
            title={book.title}
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
