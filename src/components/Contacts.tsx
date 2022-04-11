import React, { useEffect } from "react";
import { useAppSelector } from "./../Hooks";
import { fetchUsers } from "../store/actions/userAction/usersAction";
import { useDispatch } from "react-redux";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

const Contacts = () => {
  const users = useAppSelector((state) => state.users.users);
  console.log(users)
  return (
    <div>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      {users.map((item) => (
        <>
          <p>{item.id}</p>
          <p>{item.email}</p>
        </>
      ))}
    </div>
  );
};

export default Contacts;
