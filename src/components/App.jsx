import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    name: '',
    number: '',
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
      id: shottid.generate(),
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));

    //  console.log({ name: e.currentTarget.value });
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