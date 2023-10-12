import { useState } from 'react';
import axios from 'axios';

export default function useUser(user) {
  const [currentUser, setCurrentUser] = useState(user || null);

  const signUpHandler = (e) => {
    e.preventDefault();
    const userData = Object.fromEntries(new FormData(e.target));
    if (!userData.name || !userData.password || !userData.email) return;

    axios.post('/api/auth/signup', userData)
      .then(() => {
        window.location = '/';
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };

  // const logoutHandler = () => {
  //   axios.get('/api/auth/logout')
  //     .then(() => {
  //       setCurrentUser(null);
  //     });
  // };

  const signInHandler = (e) => {
    e.preventDefault();
    const userData = Object.fromEntries(new FormData(e.target));
    if (!userData.password || !userData.email) return;

    axios.post('/api/auth/login', userData)
      .then(() => {
        window.location = '/';
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };

  return {
    currentUser,
    signInHandler,
    signUpHandler,
    // logoutHandler,
  };
}
