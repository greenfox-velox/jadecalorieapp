'use strict';
import React from 'react';

const InputFilter = ({onClick}) => {
  let inputFilter;
  return (
  <div>
    <form
      onSubmit={e => {
        e.preventDefault();
        onClick(inputFilter.value);
        inputFilter.value = '';
      }}
    >
      <input className="name" type="date" name="filter" placeholder="insert date"
        ref={node => {
          inputFilter = node;
        }}
      />
      <button className="buttonfilter" type="submit">filter </button>
    </form>
  </div>
  )

  InputFilter.propTypes = {
    onClick: PropTypes.func.isRequired
  }
};

export default InputFilter;
