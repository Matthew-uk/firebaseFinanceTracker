import './transactionHistory.css'
// react-icons
import { TbCurrencyNaira } from 'react-icons/tb'

const transaction = [
    { amount: '250', plan: 'starter', date: '20-03-2023', status: 'success' },
    { amount: '500', plan: 'premium', date: '20-03-2023', status: 'success' },
    { amount: '250', plan: 'starter', date: '20-03-2023', status: 'success' },
    { amount: '1000', plan: 'Plantinium', date: '20-03-2023', status: 'failed' },
    { amount: '1000', plan: 'platinium', date: '20-03-2023', status: 'success' }
]

export default function transactionHistory() {
  return (
    <div className='transation-history-container'>
      <div className='transaction-history-wrapper'>
        <div className='transaction-hsitory-text'>
          <h3>Transaction Log</h3>
        </div>
        <hr className='line'/>
        <table className='transaction-history-table-container'>
        <thead>
            <th>amount</th>
            <th>plan</th>
            <th>date</th>
            <th>status</th>
        </thead>
        { transaction && transaction.map( transaction => (
            <tbody>
                <tr className='currency-place'><TbCurrencyNaira/>{transaction.amount}</tr>
                <tr>{transaction.plan}</tr>
                <tr>{transaction.date}</tr>
                { transaction.status === 'success' &&  <tr className='color-green'>{transaction.status}</tr> }
                { transaction.status === 'failed' &&  <tr className='error'>{transaction.status}</tr> }
            </tbody>
        )) }
        </table>
      </div>
    </div>
  )
}
