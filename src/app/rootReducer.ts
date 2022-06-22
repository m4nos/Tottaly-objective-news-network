import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/auth/authSlice';

const rootReducer = combineReducers({
  auth: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
