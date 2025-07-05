import React from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { setStockSymbol } from '../../actions/stockActions'
import { customStyles } from '../../styles/customStyles'

const selectHolder = css`
  width: 100%;
  input {
    color: #ef6e8d !important;
  }
`

const StockSymbolList = ({ stockSymbol, onChange, options, loading }) => {
  return (
    <div css={selectHolder}>
      <Select
        cacheOptions
        classNamePrefix="select-input"
        defaultValue={stockSymbol}
        onChange={(opt) => onChange(opt)}
        options={options}
        isSearchable
        styles={customStyles}
        ignoreAccents={false}
        isLoading={loading}
      />
    </div>
  )
}
const mapStateToProps = (state) => ({
  stockSymbol: state.stockSymbol,
  loading: state.filterLoadingState,
})
const mapDispatchToProps = (dispatch) => ({
  onChange: (opt) => dispatch(setStockSymbol(opt.value, opt.label)),
})

export default connect(mapStateToProps, mapDispatchToProps)(StockSymbolList)
