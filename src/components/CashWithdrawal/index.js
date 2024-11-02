// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }

  withdraw = denomination => {
    const {amount} = this.state
    if (denomination <= amount) {
      this.setState(prevState => ({amount: prevState.amount - denomination}))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="bg-container">
        <div className="cashwithdrawal-card">
          <div className="name-container">
            <div className="letter">
              <p>S</p>
            </div>
            <p className="white-color-text">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="your-balance-text">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{amount}</p>
              <p className="violet-color-text">In Rupees</p>
            </div>
          </div>
          <p className="white-color-text">Withdraw</p>
          <p className="violet-color-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationDetails={eachItem}
                key={eachItem.id}
                withdraw={this.withdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
