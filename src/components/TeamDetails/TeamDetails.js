import { faBlenderPhone, faEnvelopeOpenText, faPhone, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './TeamDetails.css';

const TeamDetails = (props) => {
    console.log(props.user);
    const {name, cell, gender, location, email, phone, picture, dob, login} = props.user;
    const handleAddUser = props.handleAddUser;
    const {title, first, last} = name;
    const image = picture.large;
    const {state, city, country} = location;

    const [mail, setmail] = useState('');
    const [mobile, setmobile] = useState('');
    const [tel, settel] = useState('');

    const displayEmail = () => setmail(email);
    const displayMobile = () => setmobile(phone);
    const displayCell = () => settel(cell);

    return (
        <div className="user-details-style">
            <div className='left-side-style'>
                <p>
                    Name : {title} {first} {last}
                </p>
                <p>
                    User Name : {login.username}
                </p>
                <p>
                    Gender : {gender}
                </p>
                <p>
                    Age : {dob.age}
                </p>
                <p>
                    Location : {state} - {city} - {country}
                </p>
            </div>
            <div className='middle-side-style'>
                <p>
                    E-mail : {mail}
                </p> 
                <p>
                    Phone No : {mobile}
                </p> 
                <p>
                    Telephone No : {tel}
                </p>
                <button className='button-style' onClick={ displayEmail }>
                    <FontAwesomeIcon icon={ faEnvelopeOpenText }></FontAwesomeIcon> &nbsp;
                    E-mail
                </button>
                <button className='button-style' onClick={ displayMobile }>
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> &nbsp;
                    Phone
                </button>
                <button className='button-style' onClick={displayCell}>
                    <FontAwesomeIcon icon={ faBlenderPhone }></FontAwesomeIcon> &nbsp;
                    Telephone
                </button>
            </div>
            <div className='right-side-style'>
                <img src={image} alt=""/>
                <br/>
                <button onClick={() => handleAddUser(props.user)} className='button-style'>
                    <FontAwesomeIcon icon={ faPlus }></FontAwesomeIcon> &nbsp;
                    Add User &nbsp;
                    <FontAwesomeIcon icon={ faUserPlus }></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default TeamDetails;