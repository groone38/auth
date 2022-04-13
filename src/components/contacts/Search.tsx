import React from "react";
import { Input } from "@mui/material";
import classes from './Search.module.css'

type Props = {
  handlerCharChange: (char: string) => void;
};

export const Search = ({ handlerCharChange }: Props) => {
  const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    handlerCharChange(e.target.value);
  };
  return <Input id="email" name="email" onChange={handlerChange} className={classes.search} placeholder='Search'/>;
};
