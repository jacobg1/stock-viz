// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import { connect } from 'react-redux'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { breakpoints } from '../../styles/breakpoints'

import {
  getCrypto,
  CryptoLines,
  TypeFilters
} from '../../actions/cryptoActions'

import PriceGraph from '../stockGraph/PriceGraph'
import CryptoFilter from '../../containers/cryptoCurrency/CryptoFilter'
import Legend from '../stockGraph/Legend'
import CryptoList from './CryptoList'
import loadingSpinner from '../../images/loading.svg'
import CryptoTypeFilter from './CryptoTypeFilter'

const stockHeader = css`
  font-size: 72px;
  color: #4d535e;
  opacity: 0.3;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  text-shadow: 0 1px 0 #e9e9ff;
  @media ${breakpoints.mobile} {
    font-size: 99px;
    top: 50%;
  }
`
const flex = css`
  display: flex;
  justify-content: space-around;
  max-width: 1178px;
  margin: 0 auto;
`

const metaText = css`
  align-self: center;
  p {
    font-size: 14px;
  }
`
const lineFilters = css`
  max-width: 900px;
  text-align: left;
  margin: 0 auto;
  padding-left: 23px;
`
const spinner = css`
  margin-top: 100px;
`
const fetchError = css`
  max-width: 900px;
  padding-top: 21%;
  margin: 0 auto;
`
const loadingHolder = css`
  width: 100%;
  height: 100%;
`
const buttonFlex = css`
  display: flex;
  flex-direction: column-reverse;
  width: 85%;
  max-width: 440px;
  @media ${breakpoints.mobile} {
    flex-direction: row;
    justify-content: center;
  }
`
const button = css`
  background-color: #a2edf2;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px;
  border: none;
  padding: 0;
  color: #2c323b;
  padding: 0 12px;
  cursor: pointer;
  border: 1px solid #a2edf2;
  display: inline-block;
  transition: all 0.4s ease-in-out;
  line-height: 25px;
  @media ${breakpoints.mobile} {
    line-height: 100%;
  }
  &:hover {
    background-color: #2c323b;
    border-color: #b1b3fc;
    color: white;
  }
  &:focus {
    border-color: #ef6e8d;
    outline: none;
  }
`
const margin = css`
  margin-left: 0;
  margin-bottom: 10px;

  @media ${breakpoints.mobile} {
    margin-left: 5px;
    margin-bottom: 0;
    width: 100%;
  }
`
const cryptoFilter = css`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`

class Crypto extends Component {
  constructor(props) {
    super()
    this.state = {
      width: 1000,
      height: 600
    }
    this.updateGraphSize = this.updateGraphSize.bind(this)
  }
  updateGraphSize() {
    const windowWidth = window.innerWidth,
      newWidth = window.innerWidth - 35

    if (windowWidth >= 970) {
      this.setState({ width: 1000, height: 600 })
    } else if (windowWidth < 970 && windowWidth > 500) {
      const newHeight = Math.round(newWidth / 1.3)
      this.setState({ width: window.innerWidth - 35, height: newHeight })
    } else {
      this.setState({
        width: 430,
        height: 375
      })
    }
  }
  componentDidMount() {
		const { error } = this.props
		if(!error) {
			this.updateGraphSize()
			window.addEventListener('resize', this.updateGraphSize, false)
		}
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateGraphSize, false)
  }
  render() {
    const {
      loading,
      cryptoPrices,
      error,
      meta,
      cryptoLines,
      cryptoCoin,
      cryptoType,
      dispatch
    } = this.props

    const { height, width } = this.state

    return (
      <>
        <div css={flex}>
          <div css={buttonFlex}>
            <button
              onClick={() => {
                if (cryptoCoin.value) {
                  dispatch(
                    getCrypto(
                      cryptoCoin.value,
                      `DIGITAL_CURRENCY_${cryptoType}`,
                      'USD'
                    )
                  )
                }
              }}
              css={button}
            >
              search
            </button>
            <div css={margin}>
              <div css={cryptoFilter}>
                <CryptoTypeFilter timePeriod={TypeFilters.MONTHLY}>
                  MONTHLY
                </CryptoTypeFilter>
                <CryptoTypeFilter timePeriod={TypeFilters.DAILY}>
                  DAILY
                </CryptoTypeFilter>
              </div>
              <CryptoList />
            </div>
          </div>
        </div>
        <div css={metaText}>
          {meta && !loading && !error && <p>Last updated: {meta['6. Last Refreshed']}</p>}
        </div>

        {error && <div css={fetchError}>Error : {error}</div>}

        {loading && (
          <div css={loadingHolder}>
            <img css={spinner} alt="Loading..." src={loadingSpinner} />
          </div>
        )}

				{!error && cryptoPrices.length !== 0 && !loading && (
          <>
            <div css={lineFilters}>
              <Legend stocklines={cryptoLines} />
              <CryptoFilter filter={CryptoLines.HIGH}>high</CryptoFilter>
              <CryptoFilter filter={CryptoLines.LOW}>low</CryptoFilter>
              <CryptoFilter filter={CryptoLines.OPEN}>open</CryptoFilter>
              <CryptoFilter filter={CryptoLines.CLOSE}>close</CryptoFilter>
            </div>
            <PriceGraph
              height={height}
              width={width}
              crypto={true}
              stockLines={cryptoLines}
              prices={cryptoPrices}
            />
          </>
        )}
        {!error && !loading && cryptoPrices.length === 0 && (
          <h1 css={stockHeader}>CRYPTO</h1>
        )}
      </>
    )
  }
}
const mapStateToProps = state => ({
  cryptoCoin: state.cryptoCoin,
  cryptoType: state.cryptoType
})
export default connect(mapStateToProps)(Crypto)
