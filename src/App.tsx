import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/actions/userAction/usersAction";
import classes from "./App.module.css";
import { AuthActionTypes, MODAL_TYPE } from "./store/actions/actionTypes";
import { Header } from "./components/header/Header";
import { useAppSelector } from "./Hooks";
import { Modal } from './components/modal/Modal';
import { openModal } from './store/actions/modalAction/modalAction';

function App() {
  const sing = useAppSelector((state) => state.modal.sing);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      dispatch(openModal(MODAL_TYPE.login))
    } else {
      dispatch({type: AuthActionTypes.AUTH_MODAL})
    }
    dispatch(fetchUsers());
  }, []);

  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        {sing && (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Contacts />} />
            </Routes>
          </>)}
        <Modal />
      </div>
    </BrowserRouter>
  );
}

export default App;
