import { InputLabel } from '@mui/material'
import React, { useState } from 'react'
import classes from './Edit.module.css'
import { Input } from '@mui/material';
import Button from "@mui/material/Button";

export const Edit = () => {
    const [value, setValue] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        number: "",
        company: ""
    })
    const valueHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue({
            ...value,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

    }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
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
        Изменить
      </Button>
    </form>
  )
}