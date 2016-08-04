import React, { PropTypes } from 'react';

const Form = ({onChange, onClick}) => (
  <div className="inputfield">
    <input className="name" type="text" name="inputMeal" placeholder="insert food" onChange={this.handleInputMealChange}/>
    <input className="calorie" type="number" name="inputCalorie" placeholder="insert number of calorie" onChange={this.handleInputCalorieChange}/>
    <input className="date" type="date" name="inputDate" onChange={this.handleInputDateChange}/>
    <button className="button-text" type="button" onClick={this.addMeal}>
      add
    </button>
    <button className="show-all" onClick={this.consoleMemory}>showall</button>
    <input className="filter" type="date" name="filter" onChange={this.filterMeals}/>
  </div>
)

Form.propTypes = {
  onClick:  PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Form
