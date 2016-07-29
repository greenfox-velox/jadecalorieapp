var Counter = React.createClass({
  getInitialState: function () {
    return {
      meal: [
        {
          id: 1,
          name: 'kolbasz',
          calorie: 999,
          date: '2016.05.12'
        },
        {
          id: 2,
          name: 'mushroom',
          calorie: 567,
          date: '2016.05.11'
        },
      ]
    };
  },

  addMeal: function (e) {
    let generatedId = this.state.meal.length + 1;
    // let newMeal = e.target.value;
    console.log(generatedId);
    // console.log(newMeal);
    console.log(this.state.meal);
    this.setState(
      {meal: this.state.meal.concat([
        {
          id: generatedId,
          name: e.target.value,
          // calorie: this.state.calorie,
          // date: this.state.date,
        }
      ])
      }
    );
  },

  drawMeals: function () {
  },
  //
  // filterMeals: function () {
  // },
  //
  deleteMeals: function () {
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
    this.setState({
     meal: this.state.meal[1].splice
    });
    console.log(this.state.meal[0]);
    console.log(this.state.meal[1]);
    this.drawMeals()
  },

  render: function () {
    return (
      <div className="jumbotron">
      <header className="container">
        <h1 className="col-sm-8">calorie counter</h1>
      </header>
        <div className="inputfield">
          <input className="name" type="text" placeholder="insert food" value={this.state.value} onChange={this.addMeal} />
          <input className="calorie" type="number" placeholder="insert number of calorie"/>
          <input className="date" type="date"/>
          <button className="button-text" onClick={this.addMeal}>
            add
          </button>
          <button className="show-all" onClick={this.drawMeals}>showall</button>
          <input className="filter" type="date"/>
          <button className="buttonfilter">filter</button>
        </div>
        <div className="food-list">
          <div className="foodholder" onClick={this.deleteMeals}>
              {this.state.meal.map((meal) =>
              <div>
                <div className="food-item" id={meal.id}>
                  <p>{meal.name}</p>
                  <p>{meal.calorie}</p>
                  <p>{meal.date}</p>
                  <div className="buttons">
                    <button className="delete" type="button"></button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
});
ReactDOM.render(
  <Counter />,
  document.querySelector('.main')
);
