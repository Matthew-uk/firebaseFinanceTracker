import { NavLink } from 'react-router-dom'
// style sheet
import './sidebarComponent.css'
// react icons
import { TbSmartHome } from 'react-icons/tb'
import { FaUserCircle } from 'react-icons/fa'
import { MdLibraryBooks } from 'react-icons/md'
import  { FiSettings, FiLogOut } from 'react-icons/fi'
import { RiDashboardLine, RiMoneyDollarCircleFill } from 'react-icons/ri'
import { BiPencil } from 'react-icons/bi'
// Logo photo
import logo from '../../assets/images/logo.png'
import { useLogout } from '../../Hooks/useLogout'

export default function SidebarComponent() {

    const { logout } = useLogout()
    
  return (
    <div className='sidebar-component-container'>
      <div className='sidebar-component-wrapper'>
        <div className='logo-container sidebar-logo-container'>
                <div className='logo-image-container'>
                    <img src={logo} alt='alt'/>
                </div>
            </div>
        <div className='sidebar-menu-list-container'>
            <div className='sidebar-menu-list-wrapper'>
                <div className='sidebar-menu-list1'>
                    <li className=''>
                    <NavLink to='/question' className='link sidebar-list-item'>
                        <BiPencil className='sidebar-icon'/>
                        <span>New Question</span>
                    </NavLink>
                    </li> 
                    <span className='sidebar-list-head'>menu</span>
                    {/* <li className=''> 
                    <NavLink to='/home' className='link sidebar-list-item'>
                        <TbSmartHome className='sidebar-icon'/>
                        <span>Home</span>
                    </NavLink>
                    </li> */}
                    <li className=''> 
                    <NavLink to='/dashboard' className='link sidebar-list-item'>
                        <RiDashboardLine className='sidebar-icon'/>
                        <span>Dashboard</span>
                    </NavLink> 
                    </li>
                    <li className=''>
                        <NavLink to='/account' className='link sidebar-list-item'>
                        <FaUserCircle className='sidebar-icon'/>
                        <span>Account</span>
                        </NavLink> 
                    </li>
                    <li className=''> 
                    <NavLink to='/plans' className='link sidebar-list-item'>
                        <RiMoneyDollarCircleFill className='sidebar-icon'/>
                        <span>Plans</span>
                    </NavLink>
                    </li>
                    <li className=''> 
                    <NavLink to='/settings' className='link sidebar-list-item'>
                        <FiSettings className='sidebar-icon'/>
                        <span>Settings</span>
                    </NavLink>
                    </li>
                    {/* <li className=s'sidebar-list-item'> 
                        <MdLibraryBooks className='sidebar-icon'/>
                        <span>Books</span>
                    </li> */}
                </div>
            </div>
        </div>
        <div className='sidebar-menu-list2-container'>
            <div className='sidebar-menu-list-wrapper'>
                <div className='sidebar-menu-list2'>                  
                    <li className='sidebar-list-item logout-button' 
                     onClick={() => logout()}
                    > 
                        <FiLogOut className='sidebar-icon'/>
                        <span>LogOut</span>
                    </li>                   
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
