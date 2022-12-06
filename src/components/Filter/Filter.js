import React from "react";
import PropTypes from 'prop-types';
import s from './Filter.module.css';

import { useDispatch} from 'react-redux';
import {  setFilter } from '../../redux/filterSlice';

function Filter() {
  const dispatch = useDispatch();

  return (
    <>
      <label className={s.label}>🔎 Find by name 
        <input
          className={s.input}
          type="text"
          name="filter"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          onChange={e => dispatch(setFilter(e.currentTarget.value))}
        />
      </label>
    </>
  )
};

Filter.propTypes = {
  filterName: PropTypes.string
};

export default Filter;