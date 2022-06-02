import React from 'react';
import PropTypes from 'prop-types';

const Books = ({ author, title }) => (
  <div className="book">
    <div>
      <p>{author}</p>
      <h2>{title}</h2>
    </div>
    <button type="button" className="btn_blue">Remove</button>
  </div>
);

Books.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Books;
