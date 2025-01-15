import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/authSlice';

const Auth = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div className="auth-container">
      {isAuthenticated ? (
        <button
          className="auth-button"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      ) : (
        <button
          className="auth-button"
          onClick={() => dispatch(login())}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Auth;
