import { createSlice } from "@reduxjs/toolkit";
import contactsOperations from "./contacts-operations";

const initialState = {
  contacts: [],
  isLoading: false,
  isRefreshing: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.addContact.pending](state) {
      state.isRefreshing = true;
    },
    [contactsOperations.addContact.fulfilled](state, { payload }) {
      state.contacts.unshift(payload);
      // state.contacts.concat(payload);
      state.isRefreshing = false;
    },
    [contactsOperations.addContact.rejected](state) {
      state.isRefreshing = false;
    },
    [contactsOperations.fetchContacts.pending](state) {
      state.isRefreshing = true;
    },
    [contactsOperations.fetchContacts.fulfilled](state, { payload }) {
      state.contacts = payload;
      state.isRefreshing = false;
    },
    [contactsOperations.fetchContacts.rejected](state) {
      state.isRefreshing = false;
    },
    [contactsOperations.deleteContact.pending](state) {
      state.isRefreshing = false;
    },
    [contactsOperations.deleteContact.fulfilled](state, { payload }) {
      state.contacts = state.contacts.filter(({ id }) => id !== payload)
      state.isRefreshing = false;
    },
  },
});
export default contactsSlice.reducer;