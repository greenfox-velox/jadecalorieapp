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
<<<<<<< HEAD
      count: this.state.count + 1,
    });
  },

  // addMeal: function () {
  //   this.setState({
  //     count.meal: this.state.count.meal[0]['calorie'] + 1,
  //   }
  //   console.log(count.meal[0]['calorie']);
  //   );
  // },
=======
      count: this.state.count + 2,
    });
  },

  addMeal: function () {
    // this.setState({
    //   meal[0]: this.state.meal[0].id + 1,
    // }
    // );
    console.log(this.getInitialState().meal[0].id);
  },
>>>>>>> 5181a993bf32244a0ec248bc4208094376406584
  //
  // drawMeals: function () {
  //
  // },
  //
  // filterMeals: function () {
  //
  // },
  //
  // deleteMeals: function () {
  //
  // },
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
<<<<<<< HEAD
          <button className="button-text" onClick={this.handleClick}>
            add {this.state.count}
=======
          <button className="button-text" onClick={this.addMeal}>
            add
>>>>>>> 5181a993bf32244a0ec248bc4208094376406584
          </button>
          <button className="show-all">showall</button>
          <input className="filter" type="date"/>
          <button className="buttonfilter">filter</button>
        </div>
        <button onClick={this.handleClick}>
          Click me! Number of clicks: {this.state.count}
        </button>
        <div className="food-list">
          <div className="foodholder">
            <div className="todo-item">here comes the foods</div>
            <div className="buttons"  id="1">
              <button className="delete" type="button"></button>
<<<<<<< HEAD
              <input className="check" type="checkbox"/>
=======
>>>>>>> 5181a993bf32244a0ec248bc4208094376406584
            </div>
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
