import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from './redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className="display__category">
      <h3>{categories.length ? categories : 'CATEGORIES'}</h3>
      <button
        type="button"
        className="btn_green"
        onClick={() => dispatch(checkStatus())}
      >
        Check status
      </button>
    </div>
  );
};

export default Categories;
