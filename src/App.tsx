import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./components/Contacts";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/actions/userAction/usersAction";
import classes from "./App.module.css";
import { AuthActionTypes } from "./store/actions/actionTypes";
import { Header } from './components/header/Header';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if(!!localStorage.getItem('auth')) {
      dispatch({type: AuthActionTypes.AUTH_MODAL})
    }
    dispatch(fetchUsers());
  }, []);
  
  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        <Header />
        <Routes>
          <Route path="/" element={<Contacts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
