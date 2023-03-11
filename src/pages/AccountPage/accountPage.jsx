import './accountPage.css'
// react icons
import { FaUserCircle } from 'react-icons/fa'
// user info
import { useAuthContext } from '../../Hooks/useAuthContext'

export default function AccountPage() {
  const { user } = useAuthContext()
  console.log(user)
  return (
    <div className='page account-page-container'>
      <div className='account-page-wrapper'>
          <div className='account-information-container'>
            <div className='account-info-box1'>
              <div className='account-image-container'>
                <FaUserCircle className='account-image-icon'/>
              </div>
              <div className='account-user-info'>
                <span>{user.name}</span>
                <p>{user.email}</p>
              </div>
              <div className='account-edit-button'>
                <button>Edit</button>
              </div>
            </div>

            {/* account box 2 */}
            <div className='account-info-box2'>
              <div className='account-info-box-head account-info-box-wrapper'>Contact Info</div>
              <hr className='line'/>
              <div className='account-info-box-wrapper'>
                <span>Username</span>
                <span>{user.name}</span>
              </div>
              <hr className='line'/>
              <div className='account-info-box-wrapper'>
                <span>Email</span>
                <span>{user.email}</span>
              </div>
              <hr className='line'/>
              <div className='account-info-box-wrapper'>
                <span>Phone number</span>
                <span>**********</span>
              </div>
            </div>

            <div className='account-info-box2'>
              <div className='account-info-box-head account-info-box-wrapper'>Personal Info</div>
              <hr className='line'/>
              <div className='account-info-box-wrapper'>
                <span>School</span>
                <span>{user.school}</span>
              </div>
              <hr className='line'/>
              <div className='account-info-box-wrapper'>
                <span>Course</span>
                <span>{user.study}</span>
              </div>
              <hr className='line'/>
              <div className='account-info-box-wrapper'>
                <span>Education Level</span>
                <span>{user.levelOfEducation}</span>
              </div>
            </div>
            <div className='account-info-box2 account-delete-container'>
              <div className='account-info-box-head account-info-box-wrapper'>Delete Account</div>
              <div className='account-info-box-wrapper'>
                <p>Note that by taking this action you will DEACTIVATE your account an this action can be only be taken back by following all due process</p>
              </div>
              <div className='account-delete-button'>
                <button>Delete Account</button>
              </div>
            </div>

          </div>
      </div>
    </div>
  )
}
