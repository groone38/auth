import React, { FC } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import classes from "./Contacts.module.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { User } from "../../types/users";
import { openModal } from "../../store/actions/modalAction/modalAction";
import { MODAL_TYPE } from "../../store/actions/actionTypes";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/actions/userAction/usersAction";

interface ContactsItemProps {
  item: User;
}

export const ContactsItem: FC<ContactsItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const remove = (id: number) => {
    dispatch(removeUser(id));
  };
  return (
    <Card key={item.id} sx={{ minWidth: 275 }} className={classes.item}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Contact
        </Typography>
        <Typography variant="h5" component="div">
          {item.firstName} {item.middleName} {item.lastName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <strong>Email:</strong> {item.email}
        </Typography>
        <Typography variant="body2">
          <strong>Tel:</strong> {item.number}
          <br />
          <strong>Company:</strong> {item.company}
        </Typography>
      </CardContent>
      <div className={classes.btn_block}>
        <button
          className={classes.btn}
          onClick={() => {
            dispatch(openModal(MODAL_TYPE.edit, item.id));
          }}
        >
          <EditIcon />
        </button>
        <button className={classes.btn} onClick={() => remove(item.id)}>
          <DeleteForeverIcon />
        </button>
      </div>
    </Card>
  );
};
