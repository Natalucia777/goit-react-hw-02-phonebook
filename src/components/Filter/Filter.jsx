import React from 'react';
import PropTypes from 'prop-types';
import { FilterWindow } from './Filter.styled';
import { FilterLabel } from './Filter.styled';
import { FilterInput } from './Filter.styled';

const Filter = ({ value, onChenge }) => (
  <FilterWindow>
    <FilterLabel>
      Filter
      <FilterInput
        type="name"
        value={value}
        onChenge={onChenge}
      />
    </FilterLabel>
  </FilterWindow>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChemge: PropTypes.func.isRequired,
};

export default Filter;