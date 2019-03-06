import React from 'react'
// import PropTypes from 'prop-types'
// import SymbolListFilter from '../../components/stockGraph/SymbolListFilter'
import { connect } from 'react-redux'

import { setListFilter } from '../../actions/stockActions'

// buttons for filtering between charts
const SymbolListFilter = ({ children, onChange, active }) => {
  // console.log(checked)
  return (
    <div className="symbol-filter">
      <input onChange={onChange} checked={active} type="radio" />
      <label>{children}</label>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.listFilters
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: () => dispatch(setListFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SymbolListFilter)
