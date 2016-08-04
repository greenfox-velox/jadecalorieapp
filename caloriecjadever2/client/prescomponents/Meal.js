import React, { PropTypes } from 'react';
import Meals from 'index';

const Meal = ({ onClick, calories, name, id }) => (
  <div
  className="food-item"
  name="listed"
  >
    <p>{name}</p>
    <p>{calories}</p>
    <p>{date}</p>
    <div
    className="buttons"
    >
      <button
      className="delete"
      type="button"
      id={id}
      onClick={this.deleteMeals}>
      </button>
  </div>
)

Meal.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired
}

export default Meal
