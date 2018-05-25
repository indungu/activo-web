import * as React from 'react';

import AuthPage from 'pages/AuthPage';
import Dashboard from 'pages/Dashboard';

const App = () => {
  return (
    <div>
      <h1 className="h1-tag"> Typescript rendering </h1>
      <AuthPage />
      <Dashboard />
    </div>
  );
};

export default App;
