import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasksSlice';
import authReducer from '../features/authSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
  },
});
