// pages.tsx

import React from 'react';

const GetFreeScorePage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Get Free Score</h1>
      <p style={styles.message}>This page will be updated soon.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center' as 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.2rem',
    color: 'gray',
  },
};

export default GetFreeScorePage;
