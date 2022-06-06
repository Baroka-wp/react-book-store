import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const InputBook = () => {
  const bookTitle = useRef();
  const bookAuthor = useRef();
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook({
      id: uuidv4(),
      title: bookTitle.current.value,
      author: bookAuthor.current.value,
    }));
    bookTitle.current.value = null;
    bookAuthor.current.value = null;
  };
  return (
    <form className="input__book" onSubmit={(e) => handleAddBook(e)}>
      <input ref={bookTitle} type="text" placeholder="Book title" />
      <input ref={bookAuthor} type="text" placeholder="Book Author" />
      <input type="submit" className="btn_blue" value="Add book" />
    </form>
  );
};

export default InputBook;
