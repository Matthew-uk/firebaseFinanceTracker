import { useState } from 'react'
import './navbarComponent.css'
import logo from '../../assets/images/logo.png'
// side bar components
import SidebarComponent from '../SidebarComponent/sidebarComponent'
import MobileSidebar from '../MobileSideBar/mobileSidebar'
// React icon
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'


export default function NavbarComponent() {

    const [ showMobileSidebar, setShowMobileSidebar ] = useState(false)

    const handleMobileSidebar = () => {
        showMobileSidebar ? setShowMobileSidebar(false) : setShowMobileSidebar(true)
    }


  return (
    <div className='navbarComponent-container'>
        <div className='navbarComponent-wrapper'>
            <div className='Logo-container'>
                <div className='logo-image-container'>
                    <img src={logo} alt='alt'/>
                </div>
            </div>
            <div className='sidebar-user-information-container navbar-user-information-container'>
            <div className='sidebar-user-details'>
                <span className='sidebar-user-name'>
                    <span className='welcome-note'>Hello</span> Wisdom woke</span>
            </div>
            <div className='sidebar-user-photo'>
                <FaUserCircle className='sidebar-user-image-icon'/>
            </div>
        </div>
            <div className='navbar-icon'>
                <GiHamburgerMenu 
                  className='navbar-hamburger-icon'
                  onClick={() => handleMobileSidebar()}
                />
            </div>
        </div>
        <SidebarComponent/>
        { showMobileSidebar && <MobileSidebar handleClick={handleMobileSidebar}/>}
    </div>
  )
}
