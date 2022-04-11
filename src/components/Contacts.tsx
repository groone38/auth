import React, { useEffect } from 'react';
import { useAppSelector } from './../Hooks';
import { fetchUsers } from './../store/actions/userAction/users';
import { useDispatch } from 'react-redux';

const Contacts = () => {
    const {users, error, loading} = useAppSelector(state => state.users)
    return (
        <div>
            
        </div>
    )
}

export default Contacts
