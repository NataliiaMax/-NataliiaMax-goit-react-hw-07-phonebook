import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import PropTypes from 'prop-types';
import style from './ContactUser.module.css';
export default function ContactUser({ name, number, contactId }) {
  const dispatch = useDispatch();
  const deleteUser = contactId => dispatch(deleteContact(contactId));

  return (
    <li key={contactId} className={style.itemUser}>
      <p className={style.itemText}>{name}: </p>
      <p className={style.itemText}>{number}</p>{' '}
      <button
        className={style.buttonDelete}
        onClick={() => deleteUser(contactId)}
      >
        Delete
      </button>
    </li>
  );
}

ContactUser.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};
