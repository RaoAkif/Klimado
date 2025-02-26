// pages/login.tsx

import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Starter Plan</h1>
      <p style={styles.message}>This page will be updated soon.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center' as const,
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

export default LoginPage;
