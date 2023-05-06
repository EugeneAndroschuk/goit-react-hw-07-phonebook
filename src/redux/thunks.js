import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://645554f1f803f3457640a025.mockapi.io/contacts'
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact ',
  async ({ name, phone }, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://645554f1f803f3457640a025.mockapi.io/contacts',
        { name, phone }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact ',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://645554f1f803f3457640a025.mockapi.io/contacts/${contactId}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
