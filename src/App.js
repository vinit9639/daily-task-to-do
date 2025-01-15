import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { store } from './app/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Auth from './components/Auth';
import './App.css'; // Import the CSS file

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/" />;
};

const AppContent = () => {
  return (
    <Router>
      <div className="container">
        <header>Advanced To-Do App</header>
        <nav>
          <Link to="/">Task Input</Link>
          <Link to="/tasks">Task List</Link>
        </nav>
        <Auth />
        <Routes>
          <Route path="/" element={<TaskInput />} />
          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <TaskList />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

const App = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);

export default App;
