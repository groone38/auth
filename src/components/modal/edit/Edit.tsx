import React, { useState } from "react";
import classes from "./Edit.module.css";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";
import { useAppSelector } from "../../../Hooks";
import { useDispatch } from "react-redux";
import { editUser, fetchUsers } from "./../../../store/actions/userAction/usersAction";
import { closeModal } from "../../../store/actions/modalAction/modalAction";

export const Edit = () => {
  const dispatch = useDispatch();
  const user_id = useAppSelector((state) => state.modal.params);
  const user = useAppSelector((state) => state.users.users).filter(
    (item) => item.id === user_id
  );
  const [value, setValue] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
  });
     
  const valueHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue({
      ...value,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(editUser(user_id, value));
    dispatch(closeModal())
    dispatch(fetchUsers())
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      {user.map((item) => {
        return (
          <>
            <p>{item.email}</p>
            <p>{item.firstName}</p>
            <Input id="firstName" name="firstName" onChange={valueHandler} />
            <p>{item.middleName}</p>
            <Input id="middleName" name="middleName" onChange={valueHandler} />
            <p>{item.lastName}</p>
            <Input id="lastName" name="lastName" onChange={valueHandler} />
          </>
        );
      })}

      <Button variant="contained" type={"submit"}>
        Изменить
      </Button>
    </form>
  );
};
