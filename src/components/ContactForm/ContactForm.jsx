import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import * as yup from 'yup';

const initialValues = {
  name: '',
  number: '',
}
// const handleSubmit = () = ? {} 
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
  
  // handleSubmit = e => {
  //   e.preventDefault();
  //   const { onSubmit } = this.props;
  //   onSubmit(this.state);
  //   this.resetForm();
  // };
  //   resetForm = () => {
  //   this.setState(() => ({
  //     name: '',
  //     number: '',
  //   }));
  // };

let userSchema = object({
  name: string().required(),
  number: number().required().positive().integer(),
});




render() {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} validationSchema={userSchema} onSubmit={handleSubmit}>
      <Form onSubmit={this.handleSubmit}>
        <label>
          Name
          <Fild
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChenge={this.handleInputChange('name')}
          />
          <ErrorMessage name="name" />
        </label>
        <label>
          Number
          <Fild
            type="text"
            name="number"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.number}
            onChenge={this.handleInputChange('number')}
          />
          <ErrorMessage name="number" />
        </label>
        <button type="submit">
          Add contact
        </button>
        </Form>
        </Formik>
    );
  }
}

export default ContactForm;