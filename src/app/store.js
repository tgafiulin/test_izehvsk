import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginReducer';
import modalReducer from './modalReducer';
import movieReducer from './movieReducer';

export default configureStore({
  reducer: {
    login: loginReducer,
    modal: modalReducer,
    movie: movieReducer
  },
});
