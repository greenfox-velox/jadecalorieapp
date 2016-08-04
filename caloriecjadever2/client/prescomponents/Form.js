// import React, { PropTypes } from 'react';
import React from 'react';
import Meals from '../index';

const Form = ({ onChange, onClick }) => (
  <div className="inputfield">
    <input className="name" type="text" name="inputMeal" placeholder="insert food" onChange={Meals.handleInputMealChange}/>
    <input className="calorie" type="number" name="inputCalorie" placeholder="insert number of calorie" onChange={Meals.handleInputCalorieChange}/>
    <input className="date" type="date" name="inputDate" onChange={Meals.handleInputDateChange}/>
    <button className="button-text" type="button" onClick={Meals.addMeal}>
      add
    </button>
    <button className="show-all" onClick={Meals.consoleMemory}>showall</button>
    <input className="filter" type="date" name="filter" onChange={Meals.filterMeals}/>
  </div>
)

// Form.propTypes = {
//   onClick:  PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired
// }

export default Form
