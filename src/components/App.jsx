import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    name: '',
    number: '',
  }
  addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    let isAdded = false;
    this.state.contacts.forEach(elem => {
      if (elem.name.toLowerCase() === normalizedName) {
        alert(`${name} is in contacts`);
        isAdded = true;
      }
    });
      
    // console.log({ name: e.currentTarget.value });
  //   const { target } = e;
  //   this.setState(() => ({
  //     [name]: target.value,
  //   }))
  // };
  render() {
    return (
      <ContactForm onSubmit={this.addContact} />

    );
  }
}

export default App;