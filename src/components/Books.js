import React from 'react';
import PropTypes from 'prop-types';

const Books = ({ author, title, handleClick }) => (
  <div className="book">
    <div className="bookDetails">
      <div>
        <small className="bookCategory">Action</small>
        <h2 className="bookTitle">{title}</h2>
        <p className="bookAuthor">{author}</p>
        <div className="actionBtn">
          <button type="button">Comments</button>
          <button type="button" onClick={handleClick}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="readingProgress">
        <div className="clircleWrap">
          <div className="circle" />
        </div>
        <div>
          <p className="percentage">64%</p>
          <p className="progressCompleted">Completed</p>
        </div>
      </div>
    </div>

    <div className="progress">
      <p className="progressCompleted">CURRENT CHAPTER</p>
      <p className="currentChapter">Chapter 17</p>
      <button
        type="button"
        className="btn_blue"
      >
        UPDATE PROGESS
      </button>
    </div>

  </div>
);
Books.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Books;
