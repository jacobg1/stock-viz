import React from 'react'
import { connect } from 'react-redux'
import { setStockSymbol } from '../../actions/stockActions'
import listOfStockSymbols from '../../data/stockSymbols.json'
import Select from 'react-select'
import { customStyles } from '../../data/customStyles'

const NYSESymbolList = ({ stockSymbol, onChange, options }) => {
  return (
    <div className="select-holder">
      <Select
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
)(NYSESymbolList)
