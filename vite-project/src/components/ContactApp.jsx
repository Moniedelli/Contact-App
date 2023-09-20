//tempat data contact berada

import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data.js";

class ContactApp extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      contacts: getData()
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

//berisi parameter id yang menunjukkan id yang akan dihapus
  onDeleteHandler(id){
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({contacts})
  }

  render(){
    return(
      <div className="contact-app">
        <h1>Contact</h1>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
      </div>
    )
  }
}

export default ContactApp;