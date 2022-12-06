import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    console.log('REQUEST')
    try {
      const { data } = await axios.get('/contacts');
      console.log(data)
      return data;
    } catch (err) {
      console.log('Error fetch contacts: ', err)
    }
  }
);

// POST @ /contacts
const addContact = createAsyncThunk(
   'contacts/addContact',
   async newContact => {
      try {
         const { data } = await axios.post('/contacts', newContact);
         return data;
      } catch (error) {
         console.log('Error addContact', error);
      }
   }
);

// DELETE @ /contacts/:id
const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      console.log('Error deleteContact', error);
    }
  }
)


const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};
export default contactsOperations;