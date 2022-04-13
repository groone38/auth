import { useAppSelector } from "../../Hooks";
import { useDispatch } from "react-redux";
import { Card } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import classes from "./Contacts.module.css";
import { fetchUsers } from "../../store/actions/userAction/usersAction";
import { openModal } from "../../store/actions/modalAction/modalAction";
import { MODAL_TYPE } from "../../store/actions/actionTypes";
import { useEffect, useState } from "react";
import { User } from "./../../types/users";
import { Search } from "./Search";
import { ContactsItem } from "./ContactsItem";

const Contacts = () => {
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
      <Search handlerCharChange={handlerCharChange} />
      <div className={classes.card}>
        {userSearch.map((item) => (
          <ContactsItem item={item} />
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
