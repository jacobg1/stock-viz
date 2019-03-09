// eslint-disable-next-line no-unused-vars
import React from 'react'
import { connect } from 'react-redux'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import Select from 'react-select'
import { setStockSymbol } from '../../actions/stockActions'
import { customStyles } from '../../styles/customStyles'

const selectHolder = css`
  width: 100%;
  input {
    color: #ef6e8d !important;
  }
`

const StockSymbolList = ({ stockSymbol, onChange, options }) => {
  return (
    <div css={selectHolder}>
      <Select
        cacheOptions
        classNamePrefix="select-input"
        defaultValue={stockSymbol}
        onChange={opt => onChange(opt)}
        options={options}
        isSearchable
        styles={customStyles}
      />
      {/* {
				Object.keys(stockSymbol).length !== 0 && (
					<>
					<span>Stock: {stockSymbol.label}</span>
						<span>Symbol: {stockSymbol.value}</span>
					</>
				)
			} */}
    </div>
  )
}
const mapStateToProps = state => ({
  stockSymbol: state.stockSymbol
})
const mapDispatchToProps = dispatch => ({
  onChange: opt => dispatch(setStockSymbol(opt.value, opt.label))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockSymbolList)
