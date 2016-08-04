'use strict';
const initmeal = [
  {
  id: 1,
  name: "kolbasz",
  calories: 345,
  date: "2016.12.22",
  },
  {
  id: 2,
  name: "tojas",
  calories: 345,
  date: "2016.12.22",
  }
]

const meal = (state, action) => {
  switch (action.type) {
    case 'ADD_MEAL':
      return {
        id: action.id,
        name: action.name,
        calories: action.calories,
        date: action.date,
      };
    case 'TOGGLE_MEAL':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed,
      });
    default:
      return state;
  }
};

const meals = (state = initmeal, action) => {
  switch (action.type) {
    case 'ADD_MEAL':
      return [
        ...state,
        meal(undefined, action),
      ];
    case 'TOGGLE_MEAL':
      return state.map(m =>
        meal(m, action)
      );
    default:
      return state;
  }
};

export default meals;
