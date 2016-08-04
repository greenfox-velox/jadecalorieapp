import React, { PropTypes } from 'react';
import Meals from '../index';

const Meal = ({ onClick, calories, name, id }) => (
  <div
  className="food-item"
  name="listed"
  >
    <p>{meal.name}</p>
    <p>{meal.calories}</p>
    <p>{meal.date}</p>
    <div
    className="buttons"
    >
      <button
      className="delete"
      type="button"
      id={meal.id}
      onClick={Meals.deleteMeals}>
      </button>
  </div>
)

// Meal.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   calories: PropTypes.number.isRequired,
//   date: PropTypes.string.isRequired
// }

export default Meal
