import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import style from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contactList = useSelector(state => state.contacts.contacts);
  const contactFilter = useSelector(state => state.filter);
  const normalizedFilterContacts = contactList?.filter(contact => {
    return contact.name.toLowerCase().includes(contactFilter);
  });

  return (
    <ul className={style.listUsers}>
      {normalizedFilterContacts?.map(contact => (
        <li key={contact.id} className={style.itemUser}>
          <p className={style.itemText}>{contact.name}: </p>
          <p className={style.itemText}>{contact.phone}</p>
          <button
            className={style.buttonDelete}
            onClick={id => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
