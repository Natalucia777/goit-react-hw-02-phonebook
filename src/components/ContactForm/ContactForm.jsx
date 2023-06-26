import React, { Component } from 'react';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
    handleInputChange = name => e => {
      // console.log({ name: e.currentTarget.value });
      const { target } = e;
    this.setState(() => ({
      [name]: target.value,
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.resetForm();
  };
  resetForm = () => {
    this.setState(() => ({
      name: '',
      number: '',
    }));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChenge={this.handleInputChange('name')}
          />
        </label>
        <label>
          Number
          <input
            type="text"
            name="number"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.number}
            onChenge={this.handleInputChange('number')}
          />
        </label>
        <button type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;