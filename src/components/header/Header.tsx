import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useAppSelector } from "../../Hooks";
import { OutUser } from "../../store/actions/modalAction/modalAction";
import { useDispatch } from "react-redux";
import classes from "./Header.module.css";
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const dispatch = useDispatch();
  const sing = useAppSelector((state) => state.modal.sing);
  const outHandler = () => {
    dispatch(OutUser());
  };
  return (
    <>
      {sing && (
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink to="/">Contacts</NavLink>
            </Typography>
            <Button color="inherit" onClick={outHandler}>
              Out
            </Button>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};
