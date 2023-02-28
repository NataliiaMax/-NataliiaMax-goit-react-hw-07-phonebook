import { createAction } from '@reduxjs/toolkit';

export const fetchContactsLoading = createAction('contacts/fetchAll/loading');
export const fetchContactsSuccess = createAction('contacts/fetchAll/success');
export const fetchContactsError = createAction('contacts/fetchAll/error');

export const fetchAddContactLoading = createAction(
  'contacts/addContact/loading'
);
export const fetchAddContactSuccess = createAction(
  'contacts/addContact/success'
);
export const fetchAddContactError = createAction('contacts/addContact/error');

export const fetchDeleteContactLoading = createAction(
  'contacts/deleteContact/loading'
);
export const fetchDeleteContactSuccess = createAction(
  'contacts/deleteContact/success'
);
export const fetchDeleteContactError = createAction(
  'contacts/deleteContact/error'
);
