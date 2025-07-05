import React from 'react'
import { connect } from 'react-redux'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { breakpoints } from '../../styles/breakpoints'
import { setListFilter } from '../../actions/stockActions'
import { setFilterLoadingState } from '../../actions'

const button = css`
  border: none;
  width: 50%;
  line-height: 23px;
  background-color: #95eaf1;
  border: 1px solid #95eaf1;
  color: #2c323b;
  font-weight: 700;
  display: inline-block;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  letter-spacing: 0.5px;
  @media ${breakpoints.mobile} {
    line-height: 20px;
  }
  &:first-of-type {
    margin-right: 5px;
  }
  &:hover {
    background-color: #2c323b;
    border: 1px solid #b1b3fc;
    color: white;
  }
  &:focus {
    border-color: #ef6e8d;
    outline: none;
  }
  &.active {
    background-color: #2c323b;
    border: 1px solid #95eaf1;
    color: white;
    &:hover {
      border-color: #ef6e8d;
    }
  }
`

// buttons for filtering between charts
const SymbolListFilter = ({ children, onClick, active }) => {
  return (
    <button css={button} onClick={onClick} className={active ? 'active' : ''}>
      {children}
    </button>
  )
}

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.listFilters,
})
function dispatchAndChangeLoadingState(dispatch, filter) {
  dispatch(setListFilter(filter))
  dispatch(setFilterLoadingState())
  setTimeout(() => {
    dispatch(setFilterLoadingState())
  }, 500)
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatchAndChangeLoadingState(dispatch, ownProps.filter),
})

export default connect(mapStateToProps, mapDispatchToProps)(SymbolListFilter)
