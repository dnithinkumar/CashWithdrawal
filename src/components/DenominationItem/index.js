// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, withdraw} = props
  const {value} = denominationDetails

  const onSelectDenomination = () => {
    withdraw(value)
  }

  return (
    <li>
      <button className="denomination-item" onClick={onSelectDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
