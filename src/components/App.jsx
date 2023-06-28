import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import shortid from 'shortid';
import { Formik } from 'formik';
import { object, string, number, date, InferType } from 'yup';

class App extends Component {
  
  state = {
   contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  };

  addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    let isAdded = false;
    this.state.contacts.forEach(elem => {
      if (elem.name.toLowerCase() === normalizedName) {
        alert(`${name} is already in contacts`);
        isAdded = true;
      }
    });
     
    if (isAdded) {
      return;
    }
    
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));


    
    const { target } = e;
    this.setState(() => ({
      [name]: target.value,
    }))
  }
  
  render() {
    return (
      <div>
        <h1>
          Phonebook
        </h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>
          Contacts
        </h2>
        <div>
          All contacts: {contacts.length}
        </div>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;