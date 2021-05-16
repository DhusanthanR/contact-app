import React from 'react';
import {Link} from 'react-router-dom';
import user from '../images/account.png';
  
const ContactCard = (props) =>{
    const {id, name, email} = props.contact;
     return (
        <div className="item d-flex felx-row">
            <img className="ui avatar image" src={user} alt="user"/>
            <div className="content" style={{marginLeft:'20px'}}>
                <Link to={ { pathname:`/contact/${id}`, state:{contact: props.contact}} }>
                    <div className="header" >{name} </div>
                    <div>{email}</div>
                </Link>
            </div>
            <i 
            className="float-right trash alternate outline icon" 
            style={{color:'red', marginTop:'7px', marginLeft:'20px'}}
            onClick = {
                () => props.clickHandler(id) 
            }>
            </i>
        </div>
    )
}

export default ContactCard;
