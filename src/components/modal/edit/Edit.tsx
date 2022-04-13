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
      <h1>Изменить ФИО</h1>
      {user.map((item) => {
        return (
          <div key={item.id}>
            <strong>Ваша почта:</strong> <p>{item.email}</p>
            <strong>Ваша фамилия:</strong> <p>{item.firstName}</p>
            <Input id="firstName" name="firstName" onChange={valueHandler} />
            <strong>Ваше имя:</strong> <p>{item.middleName}</p>
            <Input id="middleName" name="middleName" onChange={valueHandler} />
            <strong>Ваше отчество:</strong> <p>{item.lastName}</p>
            <Input id="lastName" name="lastName" onChange={valueHandler} />
          </div>
        );
      })}

      <Button variant="contained" type={"submit"}>
        Изменить
      </Button>
    </form>
  );
};
