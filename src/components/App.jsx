import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './UI/NavBar';
import HomePage from './pages/HomePage';
import OneRoutePage from './pages/OneRoutePage';
import AddPage from './pages/AddPage';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import useUser from './hooks/useUser';

function App({
  user, allRoutes, allUserRoutes, oneRout,
}) {
  const {
    currentUser, signInHandler, signUpHandler, logoutHandler,
  } = useUser(user);
  return (
    <div className="container">
      <NavBar user={user} logoutHandler={logoutHandler} />
      <Routes>
        <Route path="/" element={<HomePage user={user} allRoutes={allRoutes} />} />
        <Route path="/auth/login" element={<SignInPage signInHandler={signInHandler} />} />
        <Route path="/auth/signup" element={<SignUpPage signUpHandler={signUpHandler} />} />
        <Route path="/route/:id" element={<OneRoutePage user={user} oneRout={oneRout} />} />
        <Route path="/routs/add" element={<AddPage />} />
      </Routes>
    </div>
  );
}

export default App;
