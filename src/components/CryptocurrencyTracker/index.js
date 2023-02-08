// Write your code here
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

const CryptocurrencyTracker = () => (
  <div className="bg-container">
    <h1 className="heading">CryptoCurrency Tracker</h1>
    <img
      src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
      alt="cryptocurrency-output"
      className="crypto-image"
    />
    <CryptocurrenciesList />
  </div>
)
export default CryptocurrencyTracker
