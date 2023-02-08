// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoItem} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = cryptoItem
  return (
    <li className="crypto-item-container">
      <div className="logo-name-cont">
        <img src={currencyLogo} alt={currencyName} className="crypto-image" />
        <p>{currencyName}</p>
      </div>
      <div className="logo-name-cont">
        <p>{usdValue}</p>
        <p className="value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
