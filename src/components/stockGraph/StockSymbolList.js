import React from 'react'
import { connect } from 'react-redux'
import { setStockSymbol } from '../../actions/stockActions'
import Select from 'react-select'
import { customStyles } from '../../data/customStyles'

const StockSymbolList = ({ stockSymbol, onChange, options }) => {
  return (
    <div className="select-holder">
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
