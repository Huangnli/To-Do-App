import React from 'react';
import Routes from './routes';
import { AuthProvider } from './providers/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
