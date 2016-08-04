let nextMealId = 0;
export const addMeal = (name) => {
  return {
    type: 'ADD_MEAL',
    id: nextMealId++,
    name,
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
