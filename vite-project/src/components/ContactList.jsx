import React from "react";
import ContactItem from "./ContactItem ";

function ContactList ({ contacts, onDelete }){
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem 
          key={contact.id} 
          id={contact.id}
          onDelete={onDelete}
          {...contact} />
      ))}
    </div>
  )
}

export default ContactList;

/*
contact adalah variabel yang MEWAKILI setiap elemen dalam iterasi, 
dan kemudian nilai-nilai properti dari setiap elemen tersebut digunakan sebagai properti 
untuk ContactItem.
*/