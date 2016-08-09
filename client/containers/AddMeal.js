'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { addMeal } from '../actions';
import InputMeal from '../components/InputMeal';


const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (name, calories, date) => {
      dispatch(addMeal(name, calories, date))
    }
  }
}

const AddMeal = connect(
  null,
  mapDispatchToProps
)(InputMeal);

export default AddMeal;
