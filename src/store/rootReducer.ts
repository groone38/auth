import { userReducer } from './reducers/userReducer';
import { configureStore } from '@reduxjs/toolkit'
import { modalReducer } from './reducers/modalReducer';

export const store = configureStore({
    reducer: {
        users: userReducer,
        modal: modalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch