import React from 'react';
import { contactsOperations } from '../../redux/contacts';
import { useDispatch} from 'react-redux';
import toast from 'react-hot-toast';
import s from './ContactItem.module.css';

export function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  const onDelete = id => {
     toast.success(`The contact was deleted!`)
    return dispatch(contactsOperations.deleteContact(id))
  };

  return (
    <li className={s.item}>
      <p className={s.text}>{name}</p>
      <p className={s.text}>{number}</p>
      <button
        className={s.deleteBtn}
        type="button"
        id={id}
      onClick={() =>onDelete(id)}
      >Delete ❌
      </button>
    </li>
  )
};