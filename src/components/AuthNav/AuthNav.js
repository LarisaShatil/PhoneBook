import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 14px;
  font-weight: 700;
  color: black;
  &.active {
    color: orange;
  }
`;

export default function AuthNav() {
  return (
    <div>
      <Link to="/register">Registration</Link>
      <Link to="/login">Log in</Link>
    </div>
  );
}