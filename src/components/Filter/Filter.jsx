import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter.slice';
import { nanoid } from 'nanoid';
import style from './Filter.module.css';

export default function Filter() {
  const filterQuery = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const filterId = nanoid();

  return (
    <label className={style.filterInput} htmlFor={filterId}>
      Find contacts by name
      <input
        name="filter"
        id={filterId}
        type="text"
        value={filterQuery}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </label>
  );
}
