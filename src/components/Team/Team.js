import React, { useEffect, useState } from 'react';
import TeamCart from '../TeamCart/TeamCart';
import TeamDetails from '../TeamDetails/TeamDetails';
import './Team.css';

const Team = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState([]);

    useEffect( () => {
        fetch('https://randomuser.me/api/?results=20')
        .then(response => response.json())
        .then(data => {
            setUsers(data.results);
        })
    }, []);
    
    // console.log(users);
    const handleAddUser = (user) => {
        const newUser = [...selectedUser, user];
        setSelectedUser(newUser);
    }
    return (
        <div className="team-style">
            <div className="team-description">
                {
                    users.map(user => <TeamDetails key={user.cell} handleAddUser = {handleAddUser} user={user}></TeamDetails>)
                }
            </div>
            <div className="team-cart">
                <TeamCart users = {selectedUser}></TeamCart>
            </div>
        </div>
    );
};

export default Team;