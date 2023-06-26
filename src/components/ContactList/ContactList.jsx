import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
      <p>
        {name}  -  {number}
      </p>
        <button type="submit" onClick={() => onDelete(id)}>
          Delete
        </button>
    </li>
    ))}
    
</ul>
);

ContactList.propTypes = {
contacts: PropTypes.arrayOf
};

export default ContactList;