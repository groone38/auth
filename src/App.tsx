import React, { useEffect } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Contacts from "./components/Contacts";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/actions/userAction/users";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useAppSelector } from "./Hooks";
import classes from "./App.module.css";
import { OutUser } from "./store/actions/userAction/auth";

function App() {
  const dispatch = useDispatch();
  const sing = useAppSelector((state) => state.auth.sing);
  console.log(sing)
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const outHandler = () => {
    dispatch(OutUser());
  };
  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        {sing ? (
          <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <NavLink to="/">contacts</NavLink>
              </Typography>
              <Button color="inherit" onClick={outHandler}>
                Out
              </Button>
            </Toolbar>
          </AppBar>
        ) : (
          <Auth />
        )}
        <Routes>
          <Route path="/" element={<Contacts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
