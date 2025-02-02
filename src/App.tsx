import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthRoutes from './routes/AuthRoutes';

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AuthRoutes />} />
        </Routes>
      </BrowserRouter>
  )
};

export default App;
