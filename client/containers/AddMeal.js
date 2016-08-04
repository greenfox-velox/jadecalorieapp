'use strict;'
import React from 'react'
import { connect } from 'react-redux'
import { addMeal } from '../actions'

let AddMeal = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addMeal(input.value))
        input.value = '';
      }}>
        <input ref={node => {
          input = node;
        }} />
        <button type="submit">
          Add Meal
        </button>
      </form>
    </div>
  );
};
AddMeal = connect()(AddMeal);

export default AddMeal;
