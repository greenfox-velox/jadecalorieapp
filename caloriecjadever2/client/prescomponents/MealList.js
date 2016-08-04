import React, { PropTypes } from 'react';
import Meal from './Meal'

const MealList = ({ meals, onMealClick }) => (
  <div className="foodholder">
    {meals.map(meal =>
      <Meal
        key={meal.id}
        {...meal}
      />
    )}
  </div>
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
