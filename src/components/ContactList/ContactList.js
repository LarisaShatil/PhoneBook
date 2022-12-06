import React, { useEffect } from 'react';
import s from './ContactList.module.css';
import { getFilterValue } from '../../redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import {  contactsSelectors } from '../../redux/contacts';
import contactsOperations from '../../redux/contacts/contacts-operations';
import { ContactItem } from '../ContactItem.js/ContactItem';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getContacts);
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  
  const getFilteredContacts = (filterValue.value === '') ? contacts
    : [...contacts].filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()));

  return (
    <div className={s.container}>
      {(getFilteredContacts.length) ?
        (<>
          <h1 className={s.title}>📝 Contact List </h1>
          <ul className={s.list}>
            {getFilteredContacts.map(({ id, name, number }) =>
              <ContactItem key={id} id={id} name={name} number={number} />)}
          </ul>
        </>)
        : (<h1 className={s.title}>No contacts</h1>)}
    </div>
  )
};

export default ContactList;