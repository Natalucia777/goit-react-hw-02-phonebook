import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChenge }) => (
  <div>
    <label>
      Filter
      <input
        type="name"
        value={value}
        onChenge={onChenge}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChemge: PropTypes.func.isRequired,
};

export default Filter;