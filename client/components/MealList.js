import React, { PropTypes } from 'react'
import Meal from './Meal'

const MealList = ({ meals, onMealClick }) => (
  <ul>
    {meals.map(meal =>
      <Meal
        key={meal.id}
        {...meal}
        onClick={() => onMealClick(meal.id)}
      />
    )}
  </ul>
)

MealList.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onMealClick: PropTypes.func.isRequired
}

export default MealList
