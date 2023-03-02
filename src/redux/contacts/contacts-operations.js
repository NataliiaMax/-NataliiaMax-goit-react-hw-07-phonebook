import * as api from '../../services/contacts';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch-contacts',
  async (_, thunkAPI) => {
    try {
      const data = await api.fetchContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
  {
    condition: ({ name,number }, { getState }) => {
      const { contacts} = getState();
      const normalizedName = name.toLowerCase();
      const normalizedNumber = number.toLowerCase();
      const result = contacts.items.find(({ name, number }) => {
        return (
          name.toLowerCase() === normalizedName &&
          number.toLowerCase() === normalizedNumber
        );
      });
      if (result) {
        alert(`${name} is already ixist`);
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
