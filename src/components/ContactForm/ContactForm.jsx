import React, { Component } from 'react';

import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
// import * as yup from 'yup';
import { StForm } from './ContactForm.styled';
import { StLabel } from './ContactForm.styled';
import { FieldName } from './ContactForm.styled';
import { FieldNumber } from './ContactForm.styled';
import PropTypes from 'prop-types';

// const handleSubmit = () = ? {} 
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
//     handleInputChange = name => e => {
//       // console.log({ name: e.currentTarget.value });
//       const { target } = e;
//       this.setState(() => ({
//       [name]: target.value,
//     }));
//   };
  
  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.resetForm();
  };
  //   resetForm = () => {
  //   this.setState(() => ({
  //     name: '',
  //     number: '',
  //   }));
  // };
// const initialValues = {
//   name: '',
//   number: '',
// };
// export const ContactForm = () => {
//   const handleSubmit = (values, { resetForm }) => {
//     resetForm();
//   };
  render() {
  const { name, number } = this.state;
let userSchema = object({
  name: string().required(),
  number: number().required().positive().integer(),
});
  return (
    <Formik initialValues={{ name, number }} onSubmit={this.handleSubmit} validationSchema={userSchema} >
      <StForm autoCpmplete="off">
        <StLabel htmlFor="name">
          Name
          <FieldName
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            
            // value={this.state.name}
            // onChenge={this.handleInputChange('name')}
          />
           <ErrorMessage name="name" component="div" />
        </StLabel>
        <StLabel>
          Number
          <FieldNumber
            type="text"
            name="number"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            // value={this.state.number}
            // onChenge={this.handleInputChange('number')}
          />
          <ErrorMessage name="number" component="div" />
        </StLabel>

        <button type="submit">
          Add contact
        </button>
        </StForm>
        </Formik>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};


export default ContactForm;