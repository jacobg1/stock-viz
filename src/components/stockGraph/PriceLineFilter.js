// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { breakpoints } from '../../styles/breakpoints'

const txtColor = '#ffffff'
const beforeColor = '#ffffff'
const checkedBorderColor = '#a8a8ff'

const filterBoxes = css`
  display: inline-block;
  text-align: left;
  margin-right: 15px;
  &:first-of-type {
    padding-bottom: 10px;
  }
  label {
    cursor: pointer;
    position: relative;
    vertical-align: sub;
    padding-top: 6px;
    display: inline-block;
    font-size: 15px;
    color: ${txtColor};
  }
  input {
    display: none;
    visibility: hidden;
    &:checked ~ .custom-radio:before {
      background-color: ${beforeColor};
    }
    &:checked ~ .custom-radio {
      border-color: ${checkedBorderColor};
    }
    &:checked ~ span {
      color: ${checkedBorderColor};
    }
  }
  .custom-radio {
    border: 3px solid ${txtColor};
    width: 9px;
    height: 9px;
    ${'' /* border-radius: 50%; */}
    float: left;
    position: relative;
    transition: border 0.3s linear;
    margin-top: 2px;

    &:after {
      content: '';
      display: table;
      clear: both;
    }
    &:before {
      display: block;
      position: absolute;
      content: '';
      border-radius: 50%;
      height: 5px;
      width: 5px;
      top: 2px;
      left: 2px;
      transition: background 0.25s linear;
    }
  }
  span {
    padding-left: 5px;
    display: inline-block;
  }
`

// buttons for filtering between charts
const PriceLineFilter = ({ children, onChange, checked }) => {
  // console.log(checked)
  return (
    <div css={filterBoxes}>
      <label>
        <input onChange={onChange} checked={checked} type="checkbox" />
        <span>{children}</span>
        <div className="custom-radio" />
      </label>
    </div>
  )
}

export default PriceLineFilter

PriceLineFilter.propTypes = {
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired
}
