import React from 'react'
import { connect } from 'react-redux'
import { setStockSymbol } from '../../actions/stockActions'
import listOfStockSymbols from '../../data/stockSymbols.json'
import Select from 'react-select'
import { customStyles } from '../../data/customStyles'

const SymbolList = ({ stockSymbol, onChange }) => {

  return (
    <div className="select-holder">
      <Select
        classNamePrefix="select-input"
        defaultValue={stockSymbol.value}
        onChange={(opt) => onChange(opt)}
        options={listOfStockSymbols}
        isSearchable
        styles={customStyles}
        placeholder="Type to start searching..."
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
)(SymbolList)
