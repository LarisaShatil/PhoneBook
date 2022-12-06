import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import defaultAvatar from './avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 20,
  },
  avatar: {
    margin: 5,
    width: 60,
    borderRadius: 50,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  button: {
    backgroundColor: 'rgb(23, 61, 0)',
    border: 'none',
    borderRadius: 5,
    padding: 8,
    color: '#fff',
    fontFamily:  ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    'sans-serif'],
    fontWeight: 700,
    fontSize: 14,
  }
};

export default function UserMenu() {
const dispatch = useDispatch();
const user = useSelector(authSelectors.getUser);

  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>{user.name}</span>
      <button style={styles.button} type="button" onClick={() => dispatch(authOperations.logOut())}>
        Sign out
      </button>
    </div>
  );
}