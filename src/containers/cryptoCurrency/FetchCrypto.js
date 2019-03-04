import React from 'react'
import { connect } from 'react-redux'
import { getCrypto } from '../../actions/cryptoActions'
import coinTypes from '../../data/coinTypes.json'
import currencies from '../../data/currencies.json'

const FetchCrypto = ({ dispatch, cryptoCoin }) => {
  let symbol = 'BTC'
  let type = 'DIGITAL_CURRENCY_MONTHLY'
  let currency = 'USD'
  console.log(cryptoCoin)
  // let listOfCoins = coinTypes.map((coin, index) => {
  //   return (
  //     <option value={coin.code} key={index}>
  //       {coin.name}
  //     </option>
  //   )
  // })
  // let listOfCurrencies = currencies.map((currency, index) => {
  //   return (
  //     <option value={currency.currencyCode} key={index}>
  //       {currency.currencyName}
  //     </option>
  //   )
  // })

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
