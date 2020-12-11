import React from 'react';
import {useSelector} from "react-redux";
import User from "./User";

function Users(props) {
    const users = useSelector(state => state.users)

    return (
        <div className={'users'}>
            <ul>
                {users.map(user => {
                    return <User user={user} />
                })}
            </ul>
        </div>
    );
}

export default Users;