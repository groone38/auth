import React, { useEffect } from "react";
import { useAppSelector } from "../../Hooks";
import { fetchUsers } from "../../store/actions/userAction/usersAction";
import { useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import classes from './Contacts.module.css'

const Contacts = () => {
  const users = useAppSelector((state) => state.users.users);
  console.log(users);
  return (
    <div className={classes.card}>
      {users.map((item) => (
        <Card key={item.id} sx={{ minWidth: 275 }}>
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
        <CardActions className={classes.btn}>
          <Button size="small"><EditIcon/></Button>
          <Button size="small"><DeleteForeverIcon/></Button>
        </CardActions>
      </Card>
      ))}
    </div>
  );
};

export default Contacts;
