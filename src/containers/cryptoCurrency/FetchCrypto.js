import React from 'react'
import { connect } from 'react-redux'
import { getCrypto } from '../../actions/cryptoActions'

const FetchCrypto = ({ dispatch }) => {
  let symbol
  let type = 'DIGITAL_CURRENCY_MONTHLY'
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch(getCrypto(symbol.value, type, 'USD'))
          symbol.value = ''
        }}
      >
        {/* <select
					onChange={e => {
						type = e.target.value
					}}
				>
					<option value="DIGITAL_CURRENCY_MONTHLY">Monthly</option>
					<option value="DIGITAL_CURRENCY_WEEKLY">Daily</option>
				</select> */}
        <input ref={node => (symbol = node)} placeholder="search" type="text" />
        <button type="submit">fetch prices</button>
      </form>
    </div>
  )
}

export default connect()(FetchCrypto)
