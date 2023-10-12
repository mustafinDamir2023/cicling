import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './UI/NavBar';
import HomePage from './pages/HomePage';
import OneRoutePage from './pages/OneRoutePage';
import AddPage from './pages/AddPage';

export default function App({ user, allRoutes, allUserRoutes, oneRout }) {
  return (
    <div className="container">
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<HomePage user={user} allRoutes={allRoutes} />} />
        <Route path="/route/:id" element={<OneRoutePage user={user} oneRout={oneRout} />} />
        <Route path="/routs/add" element={<AddPage />} />
      </Routes>
    </div>
  );
}
