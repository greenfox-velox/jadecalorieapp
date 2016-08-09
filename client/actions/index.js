let nextMealId = 3;
export const addMeal = (name, calories, date) => {
  return {
    type: 'ADD_MEAL',
    id: nextMealId++,
    name,
    calories,
    date
  };
};


export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
};

export const toggleMeal = (id) => {
  return {
    type: 'TOGGLE_MEAL',
    id,
  };
};
