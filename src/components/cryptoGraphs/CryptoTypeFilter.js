// eslint-disable-next-line no-unused-vars
import React from 'react'
// import PropTypes from 'prop-types'
// import SymbolListFilter from '../../components/stockGraph/SymbolListFilter'
import { connect } from 'react-redux'

// import { setListFilter } from '../../actions/stockActions'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const CryptoTypeFilter = ({ children }) => {
	return (
	<button>{children}</button>
	)
}

export default CryptoTypeFilter