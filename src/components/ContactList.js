import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }
    
    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact={contact} clickHandler = {deleteContactHandler} key={contact.id}/>;
    }) 
    
    return (
        <div className="main" style={{marginTop:'50px'}}>
            <h1 className="w-100 d-flex flex-row justify-content-between">Contact List
                <Link to="/add">
                    <button className="btn btn-primary float-right">Add Contact</button>
                </Link>
            </h1>
            <div className="ui celled list">
                {renderContactList}
            </div>
        </div>
    );
}

export default ContactList;