import {combineReducers} from 'redux'
import { userReducer } from './reducers/userReducer';
import { configureStore } from '@reduxjs/toolkit'
// import { authReducer } from './reducers/authReducer';
import { modalReducer } from './reducers/modalReducer';

export const store = configureStore({
    reducer: {
        users: userReducer,
        // auth: authReducer,
        modal: modalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch