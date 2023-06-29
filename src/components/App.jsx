import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import shortid from 'shortid';
import { AllContacts } from './App.styled';
import { TitleContacts } from './App.styled';


// import { Formik } from 'formik';
// import { object, string, number, date, InferType } from 'yup';

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
    this.state.contacts.forEach(e => {
      if (e.name.toLowerCase() === normalizedName) {
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
  };

   

onChenge = e => {
    this.setState({ filter: e.currentTarget.value });
  };
    
visiblContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
    
    
    // const { target } = e;
    // this.setState(() => ({
    //   [name]: target.value,
    // }));
  // }

  removeContact = todoId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== todoId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    
    return (
      <div>
        <h1>
          Phonebook
        </h1>
        <ContactForm onSubmit={this.addContact} />
        <TitleContacts>
          Contacts
        </TitleContacts>
        <AllContacts>
          All contacts: {contacts.length}
        </AllContacts>
        <Filter value={filter} onChenge={this.onChenge} />
        <ContactList
        contacts={this.visiblContacts()} onRemove={this.removeContact}/>
      </div>
    );
  }
}

export default App;