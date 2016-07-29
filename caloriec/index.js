var Counter = React.createClass({
  getInitialState: function () {
    return {
      meal: [
        {
          id: 1,
          name: 'kolbasz',
          calorie: 1000,
          date: '2016.05.12'
        },
        {
          id: 2,
          name: 'mushroom',
          calorie: 200,
          date: '2016.05.11'
        },
      ]
    };
  },

  handleClick: function () {
    this.setState({

      count: this.state.count + 1,
    });
  },

  handleInputMealChange: function(e) {
     this.setState({inputMeal: e.target.value});
  },

  handleInputCalorieChange: function(e) {
     this.setState({inputCalorie: e.target.value});
  },

  handleInputDateChange: function(e) {
     this.setState({inputDate: e.target.value});
  },

  addMeal: function () {
    console.log(this.state.inputMeal);
    console.log(this.state.inputCalorie);
    console.log(this.state.inputDate);
    console.log(this.state.meal.length);
    console.log(this.state.meal[this.state.meal.length - 1].id);

    let generatedId = this.state.meal[this.state.meal.length - 1].id + 1;
    let newMeal = {
      id: generatedId,
      name: this.state.inputMeal,
      calorie: Number(this.state.inputCalorie),
      date: this.state.inputDate
      };
    console.log(generatedId);
    console.log(newMeal);
    console.log(this.state.meal);
    this.setState({

      meal: this.state.meal.concat(newMeal),
      }
    );
    console.log(this.state.meal);
  },

  consoleMemory: function () {
    console.log(this.state.meal);
  },

  handleFilterChange: function(e) {
     this.setState({filter: e.target.value});
  },

  filterMeals: function () {
    console.log(this.state.filter);
    this.setState({
      meal: this.state.meal.filter(function(meal){
      return this.state.filter === meal.date}),
    })
  },

  deleteMeals: function (e) {
    console.log(e.target.id);
    this.setState({
      meal: this.state.meal.filter(function(meal){
      console.log(meal.id);
      return parseInt(e.target.id) !== meal.id}),
    })

    // this.setState({
    //   mealElements: this.state.meal.map((meal) =>
    //   <div>
    //     <div className="food-item" id={meal.id}>
    //       <p></p>
    //       <p></p>
    //       <p></p>
    //       <div className="buttons">
    //       </div>
    //     </div>
    //   </div>
    //   // <div>
    //   //   <p>{meal.id}</p>
    //   //   <p>{meal.name}</p>
    //   // </div>
    // )});
    // this.setState({
    //  meal: this.state.meal[1].splice
    // });
    // console.log(this.state.meal[0]);
    // console.log(this.state.meal[1]);
    // this.drawMeals()
  },

  render: function () {
    return (
      <div className="jumbotron">
      <header className="container">
        <h1 className="col-sm-8">calorie counter</h1>
      </header>
        <div className="inputfield">
          <input className="name" type="text" name="inputMeal" placeholder="insert food" onChange={this.handleInputMealChange}/>
          <input className="calorie" type="number" name="inputCalorie" placeholder="insert number of calorie" onChange={this.handleInputCalorieChange}/>
          <input className="date" type="date" name="inputDate" onChange={this.handleInputDateChange}/>
          <button className="button-text" type="button" onClick={this.addMeal}>
            add
          </button>
          <button className="show-all" onClick={this.consoleMemory}>showall</button>
          <input className="filter" type="date" name="filter" onChange={this.handleFilterChange}/>
          <button className="buttonfilter" type="button" onClick={this.filterMeals}>filter</button>
        </div>
        <button onClick={this.handleClick}>
          Click me! Number of clicks: {this.state.count}
        </button>
        <div className="food-list">
          <div className="foodholder">
              {this.state.meal.map((meal) =>
              <div key={meal.id}>
                <div className="food-item" name="listed">
                  <p>{meal.name}</p>
                  <p>{meal.calorie}</p>
                  <p>{meal.date}</p>
                  <div className="buttons" key={meal.id}>
                    <button className="delete" type="button" id={meal.id} onClick={this.deleteMeals}></button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="sum">calorie sum: </div>
        </div>
      </div>
    );
  }
});
ReactDOM.render(
  <Counter />,
  document.querySelector('.main')
);
