import React from 'react'
// import PropTypes from 'prop-types'
// import SymbolListFilter from '../../components/stockGraph/SymbolListFilter'
import { connect } from 'react-redux'

import { setListFilter } from '../../actions/stockActions'

// buttons for filtering between charts
const SymbolListFilter = ({ children, onChange, active }) => {
  // console.log(checked)
  return (
    <>
      <label>{children}</label>
      <input onChange={onChange} checked={active} type="radio" />
    </>
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
