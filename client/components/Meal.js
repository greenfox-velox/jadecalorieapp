import React, { PropTypes } from 'react'

const Meal = ({ onClick, name, calories, date, id }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: id > 0 ? 'line-through' : 'none'
    }}
  >
    <h1>{name}</h1>
    {calories}
    {date}
  </li>
)

Meal.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired
}

export default Meal
