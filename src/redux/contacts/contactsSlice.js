import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const initialState = {
  contacts: {
    contacts: [],
    isLoading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, { payload }) => {
        return { ...state, isLoading: true };
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          contacts: payload,
        };
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        return { ...state, isLoading: false, error: payload };
      })
      .addCase(addContact.pending, (state, { payload }) => {
        return { ...state, isLoading: true };
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        return {
          isLoading: false,
          error: null,
          contacts: [...state.contacts, payload],
        };
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        return { ...state, isLoading: false, error: payload };
      })
      .addCase(deleteContact.pending, (state, { payload }) => {
        return { ...state, isLoading: true };
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        return {
          isLoading: false,
          error: null,
          contacts: state.contacts.filter(contact => contact.id !== payload.id),
        };
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        return { ...state, isLoading: false, error: payload };
      });
  },
});

export default contactsSlice.reducer;
