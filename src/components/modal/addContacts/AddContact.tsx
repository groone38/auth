import React, { useEffect, useState } from "react";
import classes from './AddContacts.module.css'
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import { InputLabel } from '@mui/material';
import { Input } from '@mui/material';
import { addUser } from "../../../store/actions/userAction/usersAction";
import { closeModal } from './../../../store/actions/modalAction/modalAction';
import { fetchUsers } from './../../../store/actions/userAction/usersAction';


export const AddContact = () => {
  const dispatch = useDispatch()
  const [update, setUpdate] = useState(false)
  const [value, setValue] = useState({
    email: "",
    firstName: "",
    middleName: "",
    lastName: "",
    number: null,
    company: "",
  })

  useEffect(() => {
    dispatch(fetchUsers())
  }, [update])

  const valueHandler: React.ChangeEventHandler<HTMLTextAreaElement> = e => {
    setValue({
      ...value,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const submitHandler: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    dispatch(addUser(value))
    dispatch(fetchUsers())
    dispatch(closeModal())
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
    <InputLabel htmlFor="email">Введите свой email</InputLabel>
    <Input id="email" name="email" color="primary" onChange={valueHandler} />
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
    <Button variant="contained" type={"submit"} onClick={() => setUpdate(!update)}>
      Создать контакт
    </Button>
  </form>
  );
};
