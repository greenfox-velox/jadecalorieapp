import React, { PropTypes } from 'react'

const Meal = ({ onClick, calories, name, id }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: id > 0 ? 'line-through' : 'none'
    }}
  >
    {name}
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
