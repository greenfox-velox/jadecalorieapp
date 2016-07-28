var Counter = React.createClass({
  getInitialState: function () {
    return { count: 0,
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

  handleClick: function () {
    this.setState({

      count: this.state.count + 1,
    });
  },

  addMeal: function () {
    // this.setState({
    //   meal[0]: this.state.meal[0].id + 1,
    // }
    // );
    console.log(this.state.meal[0].id);
  },

  drawMeals: function () {

    this.setState({
      mealElements: this.state.meal.map((meal) => this.insertHtml(meal)
      // <div>
      //   <div className="food-item" id={meal.id}>
      //     <p>{meal.name}</p>
      //     <p>{meal.calorie}</p>
      //     <p>{meal.date}</p>
      //     <div className="buttons">
      //       <button className="delete" type="button" onClick={this.deleteMeals} ></button>
      //     </div>
      //   </div>
      // </div>
    )});
  },


  // filterMeals: function () {
  // },

  deleteMeals: function () {

  },
  //
  // sumCalorie: function () {
  //
  // },

  render: function () {
    return (
      <div className="jumbotron">
      <header className="container">
        <h1 className="col-sm-8">calorie counter</h1>
      </header>
        <div className="inputfield">
          <input className="name" type="text" placeholder="insert food"/>
          <input className="calorie" type="number" placeholder="insert number of calorie"/>
          <input className="date" type="date"/>
          <button className="button-text" onClick={this.addMeal}>
            add
          </button>
          <button className="show-all" onClick={this.drawMeals}>showall</button>
          <input className="filter" type="date"/>
          <button className="buttonfilter">filter</button>
        </div>
        <button onClick={this.handleClick}>
          Click me! Number of clicks: {this.state.count}
        </button>
        <div className="food-list">
          <div className="foodholder">
              {this.state.mealElements}
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
