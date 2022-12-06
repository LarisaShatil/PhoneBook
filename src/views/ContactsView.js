import React from "react";
import Filter from '../components/Filter/Filter';
import { Helmet } from 'react-helmet';
import ContactList from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { useSelector } from "react-redux";
import { contactsSelectors } from "../redux/contacts";
import { Spinner } from "../components/Spinner/Spinner";

const barStyles = {
  display: 'block',
  alignItems: 'center',
  width: '450px',
  margin: 'auto',
  paddingTop: 20,
};

export default function ContactsView() {
  const isLoading = useSelector(contactsSelectors.getLoading);
  

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <div style={barStyles}>
        {isLoading && <Spinner />}

        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </>
  );
};