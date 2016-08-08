import React from 'react'
import Footer from './Footer'
import AddMeal from '../containers/AddMeal'
import VisibleMealList from '../containers/VisibleMealList'
import FilterDate from '../containers/FilterDate';

const App = () => (
  <div>
    <AddMeal />
    <FilterDate />
    <VisibleMealList />
    <Footer />
  </div>
)

export default App
