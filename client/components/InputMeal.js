'use strict';
import React from 'react';



const InputMeal = ({onClick}) => {
  let inputMeal;
  let inputCalories;
  let inputDate;
  return (
  <div>
    <form
      onSubmit={e => {
        e.preventDefault();
        onClick(inputMeal.value, parseInt(inputCalories.value), inputDate.value);
        inputMeal.value = '';
        inputCalories.value = 0;
        inputDate.value = '';
      }}
    >
      <div className="inputfield">
        <input className="name" type="text" name="inputMeal" placeholder="insert food"
          ref={node => {
            inputMeal = node;
          }}
        />
        <input className="calorie" type="number" name="inputCalorie" placeholder="insert number of calorie"
          ref={node => {
            inputCalories = node;
          }}
        />
        <input className="date" type="date" name="inputDate"
          ref={node => {
            inputDate = node;
          }}
        />
        <button type="submit">
          Add Meal
        </button>
      </div>
    </form>
  </div>
  )

  InputMeal.propTypes = {
    onClick: PropTypes.func.isRequired
  }
};

export default InputMeal;
