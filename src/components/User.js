import React from 'react';

function User(props) {
    return (
        <li>
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