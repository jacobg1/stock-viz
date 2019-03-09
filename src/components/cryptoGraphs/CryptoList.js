// eslint-disable-next-line no-unused-vars
import React from 'react'
import { connect } from 'react-redux'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { setCryptoCoin } from '../../actions/cryptoActions'
import Select from 'react-select'
import { customStyles } from '../../styles/customStyles'
import coinTypes from '../../data/coinTypes.json'

// import { breakpoints } from '../../styles/breakpoints'

const selectHolder = css`
  width: 100%;
  input {
    color: #ef6e8d !important;
  }
`

const CryptoList = ({ cryotoCoin, onChange }) => {
  return (
    <div css={selectHolder}>
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
