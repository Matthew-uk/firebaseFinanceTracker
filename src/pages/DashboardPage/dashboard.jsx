/*
  Things to be done in the settings section
  1) wallet balance
  2) current package
  3) Number of questions asked
  4) Number of questions answered
  5) Number of question remaining for subscription
  6) Transaction history
  8) Analytic graph show user activities
  9) Fund wallet 
  10) 
*/

import axios from 'axios'
import { useState, useEFfect, useEffect } from 'react'
import './dashboard.css'
// Components
import TransactionHistory from '../../components/TransactionHistory/transactionHistory'
import QuestionHistory from '../../components/QuestionHistory/questionHistory'
// react-icons
import { TbCurrencyNaira } from 'react-icons/tb'

export default function Dashboard() {

  return (
    <div className='page dashboard-page-container'>
      <div className='dashboard-page-wrapper'>

        <div className='dashboard-section1-container'>

        {/* dashboard box container */}
        <div className='dashboard-boxs-container'>
          <div className='dashboard-box1 dashboard-packages'>
            <div className='dashboard-box-min dashboard-wallet-balance dashboard-box-type1'>
              <span className='dashboard-box-text'>Total balance</span>
              <h3 className='dashboard-wallet-balance-amount'>
                <TbCurrencyNaira className='dashboard-currency-icon'/>
                <span>1,250.00</span>
                </h3>
          </div>
          <div className='dashboard-box-min dashboard-box-type1'>
            <span className='dashboard-box-text'>Current plan</span>
            <h3 className='dashboard-wallet-balance-amount'>
            <span>Premium</span>
             </h3>
          </div>
            <div className='dashboard-box-min dashboard-box-type1 dashboard-center-text'>
                <span className='dashboard-box-text'>Number of questions left</span>
                <h3 className='dashboard-wallet-balance-amount dashboard-center-text'>
                <span>13</span>
                </h3>
            </div>
            <div className='dashboard-box-min dashboard-box-type1 dashboard-center-text'>
                <span className='dashboard-box-text'>Numbers of questions asked </span>
                <h3 className='dashboard-wallet-balance-amount dashboard-center-text'>
                <span>47</span>
                </h3>
            </div>
            <div className='dashboard-box-min dashboard-box-type1 dashboard-center-text'>
                <span className='dashboard-box-text'>Numbers of questions anwsered </span>
                <h3 className='dashboard-wallet-balance-amount dashboard-center-text'>
                <span>30</span>
                </h3>
            </div>
            <div className='dashboard-box-min dashboard-box-type1 dashboard-center-text'>
                <span className='dashboard-box-text'>Numbers of questions awaiting response </span>
                <h3 className='dashboard-wallet-balance-amount dashboard-center-text'>
                <span>17</span>
                </h3>
            </div>
        </div>
          <div className='dashboard-box-min-sub-wrapper'>
        </div>

        </div>

        <TransactionHistory/>

      </div>

      <QuestionHistory/>

    </div>
    </div>
  )
}
