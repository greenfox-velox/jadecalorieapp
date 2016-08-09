import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import InputFilter from '../components/InputFilter'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (filter) => {
      dispatch(setVisibilityFilter(filter))
    }
  }
}

const FilterDate = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFilter)

export default FilterDate;
