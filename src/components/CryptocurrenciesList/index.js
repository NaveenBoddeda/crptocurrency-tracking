// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    currencyList: {},
    isLoader: true,
  }

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({currencyList: updatedData, isLoader: false})
  }

  render() {
    const {currencyList, isLoader} = this.state

    return (
      <div className="currency-list-container">
        <div className="heading-list-container">
          <p>Coin Type</p>
          <div className="value-container">
            <p>USD</p>
            <p className="value">EURO</p>
          </div>
        </div>
        <ul className="list-items-container">
          {isLoader ? (
            <p data-testid="loader">Loading...</p>
          ) : (
            currencyList.map(eachItem => (
              <CryptocurrencyItem cryptoItem={eachItem} key={eachItem.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}
export default CryptocurrenciesList
