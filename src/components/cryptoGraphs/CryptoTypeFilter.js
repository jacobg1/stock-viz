// eslint-disable-next-line no-unused-vars
import React from 'react'
import { connect } from 'react-redux'
import { setCryptoType } from '../../actions/cryptoActions'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { breakpoints } from '../../styles/breakpoints'

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
    line-height: 15px;
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
const CryptoTypeFilter = ({ children, active, onClick }) => {
  return (
    <button css={button} onClick={onClick} className={active ? 'active' : ''}>
      {children}
    </button>
  )
}

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.timePeriod === state.cryptoType
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setCryptoType(ownProps.timePeriod))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CryptoTypeFilter)
