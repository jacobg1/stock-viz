import React from 'react'
import { connect } from 'react-redux'
import { getCrypto } from '../../actions/cryptoActions'


const FetchCrypto = ({ dispatch, cryptoCoin }) => {
  // let symbol = 'BTC'
  let type = 'DIGITAL_CURRENCY_MONTHLY'
  let currency = 'USD'
  

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (cryptoCoin.value) {
            dispatch(getCrypto(cryptoCoin.value, type, currency))
          }
        }}
      >
        {/* <select
          onChange={e => {
            console.log(e.target.value)
            symbol = e.target.value
          }}
        >
          {listOfCoins}
        </select>
        <select
          onChange={e => {
            currency = e.target.value
          }}
        >
          {listOfCurrencies}
        </select> */}
        <button type="submit">fetch prices</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  cryptoCoin: state.cryptoCoin
})

export default connect(mapStateToProps)(FetchCrypto)
