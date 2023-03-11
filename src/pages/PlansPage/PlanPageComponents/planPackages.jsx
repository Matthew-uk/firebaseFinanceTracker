import './planPackages.css'
// react icons
import { TbCurrencyNaira } from 'react-icons/tb'

export default function planPackages({ packageName, amount, numberOfQuestions }) {
  return (
    <div className='plan-packages-container'>
      <div className='plan-packages-wrapper'>
        <div className='plan-name-details'>
            <h3>{packageName}</h3>
        </div>
        <div className='plan-amount'>
            <TbCurrencyNaira className='plan-icon'/>
            <h2>{amount}</h2>
        </div>
        <hr/>
        <div className='plan-package-properties'>
            {numberOfQuestions} questions
        </div>
        <div className='plan-package-button'>
            <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}
