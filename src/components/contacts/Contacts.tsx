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

const Contacts = () => {
  const dispatch = useDispatch();
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
          <Button size="small" onClick={() => {dispatch(removeUser(item.id)); dispatch(fetchUsers())}}><DeleteForeverIcon/></Button>
        </CardActions>
      </Card>
      ))}
    </div>
  );
};

export default Contacts;
