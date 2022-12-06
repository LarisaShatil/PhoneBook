import React from 'react';
import { Helmet } from 'react-helmet';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div style={styles.container}>
      <Helmet>
        <title>Main</title>
      </Helmet>
    <h1 style={styles.title}>
      Welcome to the Contact Book{' '}
      <span role="img" aria-label="welcome icon">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomeView;