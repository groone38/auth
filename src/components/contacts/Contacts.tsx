import { useAppSelector } from "../../Hooks";
import { useDispatch } from "react-redux";
import { Card, CardContent, Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import classes from "./Contacts.module.css";
import {
  fetchUsers,
  removeUser,
} from "../../store/actions/userAction/usersAction";
import { openModal } from "../../store/actions/modalAction/modalAction";
import { MODAL_TYPE } from "../../store/actions/actionTypes";
import { useEffect, useState } from "react";
import { User } from "./../../types/users";
import { Search } from "./Search";

const Contacts = () => {
  const [update, setUpdate] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const users = useAppSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  let userSearch: User[] = users.filter((i) =>
    i.firstName.toLowerCase().includes(search.toLowerCase())
  );
  const handlerCharChange = (user: string) => {
    setSearch(user);
  };
  return (
    <>
    <Search handlerCharChange={handlerCharChange}/>
    <div className={classes.card}>
      {userSearch.map((item) => (
        <Card key={item.id} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
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
                setUpdate(!update);
              }}
            >
              <EditIcon />
            </button>
            <button
              className={classes.btn}
              onClick={() => {
                dispatch(removeUser(item.id));
                dispatch(fetchUsers());
                setUpdate(!update);
              }}
            >
              <DeleteForeverIcon />
            </button>
          </div>
        </Card>
      ))}
      <Card
        sx={{ minWidth: 275 }}
        className={classes.block}
        onClick={() => dispatch(openModal(MODAL_TYPE.add))}
      >
        <AddIcon />
      </Card>
    </div>
  </>
  );
};

export default Contacts;
