import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './TeamCart.css';

const TeamCart = (props) => {
    const users = props.users;
    return (
        <div>
            <h1>Team Cart</h1>
            <hr/>
            <h3>Selected User : {users.length}</h3>
            <hr/>
            <h3>User List</h3>
            <hr/>
            {
                users.map( user => 
                    <div className="cart-image">
                        <img src={user.picture.medium} alt=""/>
                        <div style={{textAlign: 'center'}}>
                            <p>{user.name.first}</p>
                            <p>Added</p>
                        </div>
                        <button className='button-style'>
                            <FontAwesomeIcon icon = { faTrash }></FontAwesomeIcon>
                        </button>
                    </div>
                    )
            }
        </div>
    );
};

export default TeamCart;