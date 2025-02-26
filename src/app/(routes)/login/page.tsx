// pages/login.tsx

import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Login Page</h1>
      <p style={styles.message}>This component design is not yet available.</p>
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

export default LoginPage;
