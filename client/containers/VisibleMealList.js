import { connect } from 'react-redux';
import { toggleMeal } from '../actions'
import MealList from '../components/MealList'

const getVisibleMeals = (meals, filter) => {
  console.log('before if statement: ' + filter);
  if (filter) {
      return meals.filter(m => (m.date === filter) );

    // case 'SHOW_ACTIVE':
    //   return meals.filter(t => !t.completed)
  }
  return meals;
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
