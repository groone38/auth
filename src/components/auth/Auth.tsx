import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../Hooks";
import { AuthUser, OutUser } from "../../store/actions/userAction/authAction";
import Button from "@mui/material/Button";
import { InputLabel, Input, FormHelperText } from "@mui/material";
import classes from './Auth.module.css'

const Auth = () => {
  const dispatch = useDispatch();
  const error = useAppSelector((state) => state.auth.error);
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const valueHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue({
      ...value,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(AuthUser(value));
  };
  return (
    <div className={classes.wrapper}>

    
    <form action="" onSubmit={submitHandler} className={classes.form}>
      {!error ? (
        <>
          <InputLabel htmlFor="email">Введите свой email</InputLabel>
          <Input id="email" name="email" onChange={valueHandler} />
          <InputLabel htmlFor="password">Введите свой пароль</InputLabel>
          <Input
            id="password"
            aria-describedby="error-password"
            name="password"
            onChange={valueHandler}
          />
        </>
      ) : (
        <>
          <InputLabel htmlFor="email" error>Введите свой email</InputLabel>
          <Input id="email" error name="email" color='primary' aria-describedby="email-password" onChange={valueHandler} />
          <FormHelperText error id="email-password">
            Поле указанно неверно 
          </FormHelperText>
          <InputLabel htmlFor="password" error>Введите свой пароль</InputLabel>
          <Input
            id="password"
            color='primary'
            error
            aria-describedby="error-password"
            name="password"
            onChange={valueHandler}
          />
          <FormHelperText error id="error-password">
          Поле указанно неверно
          </FormHelperText>
        </>
      )}

      <Button variant="contained" type={"submit"}>
        Войти
      </Button>
    </form>
    </div>
  );
};

export default Auth;
