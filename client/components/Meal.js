import React, { PropTypes } from 'react'

const Meal = ({ onClick, name, calories, date, id }) => (
  <div
    onClick={onClick}
    className="food-item" name="listed">
  >
    <p>{name}</p>
    <p>{calories}</p>
    <p>{date}</p>
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
