import React from 'react';
import { Formik, Form, Field } from 'formik';
import { object, string, number } from 'yup';
// import * as yup from 'yup';


// const handleSubmit = () = ? {} 
// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//     handleInputChange = name => e => {
//       // console.log({ name: e.currentTarget.value });
//       const { target } = e;
//       this.setState(() => ({
//       [name]: target.value,
//     }));
//   };
  
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
const initialValues = {
  name: '',
  number: '',
};
export const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };

let userSchema = object({
  name: string().required(),
  number: number().required().positive().integer(),
});
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={userSchema} >
      <Form autoCpmplete="off">
        <label htmlFor="name">
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
          {/* <ErrorMessage name="name" /> */}
        </label>
        <label>
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
          {/* <ErrorMessage name="number" /> */}
        </label>

        <button type="submit">
          Add contact
        </button>
        </Form>
        </Formik>
    );
  }


export default ContactForm;