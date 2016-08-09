import { connect } from 'react-redux';
import { toggleMeal } from '../actions'
import MealList from '../components/MealList'

const getVisibleMeals = (meals, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return meals;
    case 'SHOW_FILTERED':
      return meals.filter(m => !m.date);
  }
};

const mapStateToProps = (state) => {
  return {
    meals: getVisibleMeals(state.meals, state.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMealClick: (id) => {
      dispatch(toggleMeal(id))
    },
  };
};

const VisibleMealList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MealList)

export default VisibleMealList;
