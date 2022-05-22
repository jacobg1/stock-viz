import React from 'react'
import PropTypes from 'prop-types'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { breakpoints } from '../styles/breakpoints'

const txtColor = '#ffffff'
const beforeColor = '#ffffff'
const checkedBorderColor = '#a8a8ff'

const filterBoxes = css`
  display: block;
  text-align: left;
  &:first-of-type {
    padding-bottom: 10px;
  }
  label {
    cursor: pointer;
    position: relative;
    vertical-align: sub;
    padding-top: 6px;
    display: inline-block;
    font-size: 17px;
    color: ${txtColor};
    @media ${breakpoints.mobile} {
      font-size: 19px;
    }
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
    border: 5px solid ${txtColor};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    float: left;
    position: relative;
    transition: border 0.3s linear;
    @media ${breakpoints.mobile} {
      width: 23px;
      height: 23px;
    }
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
      height: 12px;
      width: 12px;
      top: 4px;
      left: 4px;
      transition: background 0.25s linear;
      @media ${breakpoints.mobile} {
        height: 13px;
        width: 13px;
        top: 5px;
        left: 5px;
      }
    }
  }
  span {
    padding-left: 10px;
    display: inline-block;
    vertical-align: middle;
    padding-top: 6px;
  }
`

// buttons for filtering between charts
const Filter = ({ children, onChange, active }) => {
  return (
    <div css={filterBoxes}>
      <label>
        <input onChange={onChange} checked={active} type="radio" />
        <span>{children}</span>
        <div className="custom-radio" />
      </label>
    </div>
  )
}

export default Filter

Filter.propTypes = {
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}
