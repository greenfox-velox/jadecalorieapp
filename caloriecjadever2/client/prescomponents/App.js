'use strict';

import React from 'react';
import Form from './Form';
// import MealList from './MealList';

const App = () => (
  <div>
    <Form />
  </div>
);

  // <MealList />

  // <div className="jumbotron">
  //   <header className="container">
  //     <h1 className="col-sm-8">calorie counter</h1>
  //   </header>
  //   <div className="inputfield">
  //     <input className="name" type="text" name="inputMeal" placeholder="insert food" onChange={this.handleInputMealChange}/>
  //     <input className="calorie" type="number" name="inputCalorie" placeholder="insert number of calorie" onChange={this.handleInputCalorieChange}/>
  //     <input className="date" type="date" name="inputDate" onChange={this.handleInputDateChange}/>
  //     <button className="button-text" type="button" onClick={this.addMeal}>
  //       add
  //     </button>
  //     <button className="show-all" onClick={this.consoleMemory}>showall</button>
  //     <input className="filter" type="date" name="filter" onChange={this.filterMeals}/>
  //   </div>
  //   <div className="food-list">
  //     <div className="foodholder">
  //         {this.state.meal.map((meal) => (meal.date === this.state.filter) || (!this.state.filter) ?
  //         <div key={meal.id}>
  //           <div className="food-item" name="listed">
  //             <p>{meal.name}</p>
  //             <p>{meal.calorie}</p>
  //             <p>{meal.date}</p>
  //             <div className="buttons" key={meal.id}>
  //               <button className="delete" type="button" id={meal.id} onClick={this.deleteMeals}></button>
  //             </div>
  //           </div>
  //         </div>
  //         : console.log('no items')
  //       )}
  //     </div>
  //     <div className="sum">calorie sum: {this.state.meal.reduce((sum, meal) => meal.show ? sum + meal.calorie : 0, 0)} </div>
  //   </div>
  // </div>


export default App
