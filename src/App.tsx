import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/actions/userAction/usersAction";
import classes from "./App.module.css";
import { AuthActionTypes } from "./store/actions/actionTypes";
import { Header } from "./components/header/Header";
import { useAppSelector } from "./Hooks";
import Auth from './components/modal/auth/Auth';

function App() {
  const sing = useAppSelector((state) => state.auth.sing);
  const users = useAppSelector(state => state.users.users)
  const dispatch = useDispatch();
  console.log(!!localStorage.getItem("auth"));
  useEffect(() => {
    if (!!localStorage.getItem("auth")) {
      dispatch({ type: AuthActionTypes.AUTH_MODAL });
    }
    dispatch(fetchUsers());
  }, []);

  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        {sing ? (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Contacts />} />
            </Routes>
          </>
        ) : (
          <Auth />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
