import {combineReducers} from 'redux'
import { userReducer } from './reducers/userReducer';
import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './reducers/authReducer';

export const store = configureStore({
    reducer: {
        users: userReducer,
        auth: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch