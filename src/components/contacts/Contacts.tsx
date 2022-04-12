import { useAppSelector } from "../../Hooks";
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
import { fetchUsers, removeUser } from "../../store/actions/userAction/usersAction";
import { openModal } from "../../store/actions/modalAction/modalAction";
import { MODAL_TYPE } from "../../store/actions/actionTypes";

const Contacts = () => {
  const dispatch = useDispatch();
  const users = useAppSelector((state) => state.users.users);
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
        <div className={classes.btn_block}>
          <button className={classes.btn} onClick={() => dispatch(openModal(MODAL_TYPE.edit))}><EditIcon/></button>
          <button className={classes.btn} onClick={() => {dispatch(removeUser(item.id)); dispatch(fetchUsers())}}><DeleteForeverIcon/></button>
        </div>
      </Card>
      ))}
    </div>
  );
};

export default Contacts;
