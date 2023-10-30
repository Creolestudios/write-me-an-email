import React from 'react';
import Front from './components/front/Front';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/notfound/NotFound';

function App() {
  return (
    <>
      <BrowserRouter basename='/emailgpt'>
        <Routes>
          <Route path='/' element={<Front />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
