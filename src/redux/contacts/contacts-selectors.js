import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.isLoading;

const getFilter = state => state.contacts.filter;

const getContacts = state => state.contacts.contacts;

const contactsSelectors = {
  getLoading,
  getFilter,
  getContacts,
};

export default contactsSelectors;