import React from 'react';
import { CustomInput } from 'reactstrap';

const FilterNav = ({ id, name, checked, onChange, label }) => {
  return (
    <div>
      <CustomInput
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        label={label}
        className="ml-3"
      />
    </div>
  );
};

export default FilterNav;
