import React from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { setCryptoCoin } from '../../actions/cryptoActions'
import { customStyles } from '../../styles/customStyles'
import coinTypes from '../../data/coinTypes.json'

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
