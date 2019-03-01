import React from 'react'
import { connect } from 'react-redux'
import { getPrices, setStockSymbol } from '../../actions/stockActions'
import listOfStockSymbols from '../../data/stockSymbols.json'
import Select from 'react-select';
const SymbolList = ({ dispatch, stockSymbol }) => {
	// console.log(stockSymbol)
	
	const handleChange = (e) => {
		console.log(e)
	}
	const customStyles = {
		option: (provided, state) => ({
			...provided,
			borderBottom: '1px dotted pink',
			color: state.isSelected ? 'red' : 'blue',
			padding: 20,
		}),
		control: () => ({
			// none of react-select's styles are passed to <Control />
			width: 200,
		}),
		singleValue: (provided, state) => {
			const opacity = state.isDisabled ? 0.5 : 1;
			const transition = 'opacity 300ms';

			return { ...provided, opacity, transition };
		}
	}
	return (
		<div>
			<Select
				defaultValue={stockSymbol}
				onChange={opt => dispatch(setStockSymbol(opt.value))} 
				options={listOfStockSymbols}
				styles={customStyles}
			/>
		</div>
	)
}
const mapStateToProps = state => ({
	stockSymbol: state.stockSymbol
})

export default connect(mapStateToProps)(SymbolList)
