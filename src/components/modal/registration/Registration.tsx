import React, { useState } from "react";
import classes from "./Registration.module.css";
import { Input, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch } from 'react-redux';
import { RegistrUser } from './../../../store/actions/modalAction/modalAction';

export const Registration = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState({
    email: "",
    password: "",
    firstName: "",
    middleName: "",
    lastName: "",
    number: null,
    company: "",
  });

  const valueHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue({
      ...value,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const submitHandler: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    dispatch(RegistrUser(value))
  }
  console.log(value);
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <InputLabel htmlFor="email">Введите свой email</InputLabel>
      <Input id="email" name="email" color="primary" onChange={valueHandler} />
      <InputLabel htmlFor="password">Введите свой пароль</InputLabel>
      <Input id="password" name="password" onChange={valueHandler} />
      <InputLabel htmlFor="firstName">Введите свою Фамилию</InputLabel>
      <Input id="firstName" name="firstName" onChange={valueHandler} />
      <InputLabel htmlFor="middleName">Введите свое Имя</InputLabel>
      <Input id="middleName" name="middleName" onChange={valueHandler} />
      <InputLabel htmlFor="lastName">Введите свое Отчество</InputLabel>
      <Input id="lastName" name="lastName" onChange={valueHandler} />
      <InputLabel htmlFor="number">Введите свой телефон</InputLabel>
      <Input id="tel" name="number" onChange={valueHandler} />
      <InputLabel htmlFor="company">Компания, в которой вы работаете</InputLabel>
      <Input id="company" name="company" onChange={valueHandler} />
      <Button variant="contained" type={"submit"}>
        Зарегистрироваться
      </Button>
    </form>
  );
};
