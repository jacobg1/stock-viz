import React from 'react'
import { connect } from 'react-redux'
import { setCryptoCoin } from '../../actions/cryptoActions'
import coinTypes from '../../data/coinTypes.json'
import Select from 'react-select'
import { customStyles } from '../../data/customStyles'

const CryptoList = ({ cryotoCoin, onChange }) => {
  return (
    <div className="select-holder">
      <Select
        classNamePrefix="select-input"
        defaultValue={cryotoCoin}
        onChange={opt => onChange(opt)}
        options={coinTypes}
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
  cryotoCoin: state.cryptoCoin
})
const mapDispatchToProps = dispatch => ({
  onChange: opt => dispatch(setCryptoCoin(opt.value, opt.label))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CryptoList)
