import React from 'react';
import {useDispatch} from "react-redux";
import {selectUser} from "../redux/actions";

function User(props) {
    const dispatch = useDispatch();

    const handleSelectUser = () => {
        dispatch(selectUser(props.user.id))
    }

    return (
        <li onClick={handleSelectUser}>
            <div className={'user_name'}>
                {props.user.name}
            </div>
            <div className={'user_email'}>
                {props.user.email}
            </div>
        </li>
    );
}

export default User;