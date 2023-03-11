// THIS FOLDER WILL ACT AS OUR APP.JS

import React from 'react'
// React packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// General Styles
import './GeneralStyles.css'
// Pages
import LandingPage from './pages/LandingPage/landingPage'
import Login from './pages/Login/login'
import SignUp from './pages/Sigup/signup'
import Dashboard from './pages/DashboardPage/dashboard'
import QuestionPage from './pages/QuestionPage/questionPage'
import HomePage from './pages/HomePage/homePage'
import AccountPage from './pages/AccountPage/accountPage'
import SettingsPage from './pages/SettingsPage/settingsPage'
import PlanPage from './pages/PlansPage/planPage'
// Components
import NavbarComponent from './components/NavBar/navbarComponent'
// authentication context
import { useAuthContext } from './Hooks/useAuthContext'


export default function LectureFree() {

  const { user } = useAuthContext()

  return (
    <div>
      <BrowserRouter>
      { user && <NavbarComponent/> }
        <Routes>
            <Route path='/login' element={!user ?  <Login/>: <Dashboard/> }/>
            <Route path='/' element={!user ? <LandingPage />: <QuestionPage/>} />
            <Route path='/signup' element={!user ? <SignUp/>: <Dashboard/>} />
            <Route path='/dashboard' element={user ? <Dashboard/>: <Login/>}/>
            <Route path='/home' element={ user ? <HomePage/> : <Login/> }/>
            <Route path='/account' element={user ? <AccountPage/> : <Login/>} />
            <Route path='/question' element={ user ? <QuestionPage/>: <Login/>}/>
            <Route path='/settings' element={ user ? <SettingsPage/> : <Login/> }/>
            <Route path='/plans' element={ user ? <PlanPage/> : <Login/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
