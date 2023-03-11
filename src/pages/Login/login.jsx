import { useState } from 'react'
import { Link } from 'react-router-dom'
// importing login css file
import './Login.css'
// importing login image
import Image from '../../assets/images/login image.jpeg'
import { useLogin } from '../../Hooks/useLogin'

export default function Login() {

  const [ email, setEmail ] = useState('')
  const [ emailError, setEmailError ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ passwordError, setPasswordError ] = useState('')
  const { isLoading,login, error } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmailError('')
    setPasswordError('')

    if(!email){
      setEmailError('input an email address')
    }
    if(!password){
      setPasswordError('input a password')
    } else if (password && (password.length <= 7)){
      return setPasswordError('password must be more than 7 characters')
    }

    if(email && password){
      login(
        email,
        password
      )

    }

  }

  return (
    <div className='login-page-container auth-container' >
      <div className='login-page-wrapper auth-wrapper'>
        <div className='login-page-image-container auth-image-container'>
          <div className='login-page-image-wrapper auth-image-wrapper'>
            <div className='auth-image-sub-container'>
            {/* <img src={Image} alt='alt'/> */}
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className='login-form-container auth-form-container'>
          <div className='login-form-wrapper auth-form-wrapper'>
            <h2>Login In</h2>
             {error && <div className='error'>{error}</div>}
            <form onSubmit={(e) => handleSubmit(e)}>
              <label>
                <span>Email Address</span>
                <input
                 type='email'
                 onChange={(e) => setEmail(e.target.value)}
                 value={email}
                />
                { emailError && <div className='error'>{emailError}</div> }
              </label>
              <label>
                <span>Password</span>
                <input
                 type='password'
                 onChange={(e) => setPassword(e.target.value)}
                 value={password}
                />
                { passwordError && <div className='error'>{passwordError}</div> }
              </label>
              {!isLoading && <div className='form-button'>
                <button>Login</button>
              </div>}
              {isLoading && <div className='form-button '>
                <button className='loading-button' disabled>Loading...</button>
              </div>}
              <div className='form-text'>
                Don't have an account <span><Link to='/signup'>sign up</Link></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
