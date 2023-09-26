//tempat data contact berada

import React from "react";
import ContactList from "./ContactList";
import { getContacts } from "../utils/data.js";
import ContactInput from "./ContactInput";

class ContactApp extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      contacts: getContacts()
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

//berisi parameter id yang menunjukkan id yang akan dihapus
  onDeleteHandler(id){
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({contacts})
  }

  onAddContactHandler({name, tag}){
    this.setState ((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: '/image/default.jpg'
          }
        ]
      }
    })
  }

  render(){
    return(
      <div className="contact-app">
        <h1>Contact</h1>
        <h2>Tambah Kontak</h2>
        <ContactInput addContact={this.onAddContactHandler} />
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
      </div>
    )
  }
}

export default ContactApp;