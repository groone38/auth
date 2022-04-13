import React, { useEffect } from "react";
import { useAppSelector } from "../../Hooks";
import { MODAL_TYPE } from "../../store/actions/actionTypes";
import Auth from "./auth/Auth";
import { Registration } from "./registration/Registration";
import classes from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/actions/modalAction/modalAction";
import { Edit } from './edit/Edit';
import { AddContact } from './addContacts/AddContact';


export const Modal = () => {
  const typeModal = useAppSelector((state) => state.modal.typeModal);
  const modal = useAppSelector((state) => state.modal.is_open);
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  let body = null;
  switch (typeModal) {
    case MODAL_TYPE.login:
      body = <Auth />;
      break;
    case MODAL_TYPE.register:
      body = <Registration />;
      break;
    case MODAL_TYPE.edit:
      body = <Edit />
      break;
    case MODAL_TYPE.add:
      body = <AddContact />
      break;
    default:
      break;
  }
  return (
    <div className={classes.modal + ' ' + (modal && classes.active)} onClick={() => dispatch(closeModal())}>
        <div className={classes.modal__content} onClick={e => e.stopPropagation()}>
          {body}
        </div>
    </div>
  );
};
