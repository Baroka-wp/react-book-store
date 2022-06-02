import React from 'react';

const InputBook = () => (
  <form className="input__book">
    <input type="text" placeholder="Book title" />
    <input type="text" placeholder="Book Author" />
    <input type="submit" className="btn_blue" value="Add book" />
  </form>
);

export default InputBook;
