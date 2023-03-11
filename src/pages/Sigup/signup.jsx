import { useState } from 'react'
// Packages
import { Link } from 'react-router-dom'
import Select from 'react-select'
// importing login css file
import '../Login/Login.css'
// importing login image
import Image from '../../assets/images/login image.jpeg'
// ////////
import { useSignup } from '../../Hooks/useSignup'

const levels = [
    { value: 'Tertiary', label:'Tertiary' },
    { value:'Secondary', label:'Secondary' }
]

export default function SignUp() {

  const [ showForm2, setShowForm2 ] = useState(false)
  const [ fullName, setFullName ] = useState('') 
  const [ fullNameError, setFullNameError ] = useState('') 
  const [ email, setEmail ] = useState('')
  const [ emailError, setEmailError ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ passwordError, setPasswordError ] = useState('')
  const [ confirmPassword, setconfirmPassword ] = useState('')
  const [ confirmPasswordError, setconfirmPasswordError ] = useState('')
  const [ school, setSchool ] = useState('')
  const [ schoolError, setSchoolError ] = useState('')
  const [ course, setCourse ] = useState('')
  const [ courseError, setCourseError ] = useState('')
  const [ level, setLevel ] = useState('')
  const [ levelError, setLevelError ] = useState('')

  const { error, response, signup, isLoading } = useSignup()


  const handleform1 = (e) => {
    e.preventDefault()
    setFullNameError('')
    setEmailError('')
    setPasswordError('')
    setconfirmPasswordError('')

    if(!fullName){
        setFullNameError('Input a Name')
    }
    if(!email){
        setEmailError('Input an Email address')
    }
    if(!password){
        setPasswordError('Input a password')
    } else if(password && (password.length <= 7)){
        return setPasswordError('password must contain at least 8 characters')
    }
    if(!confirmPassword){
        setconfirmPasswordError('Confirm your password')
    } else if ( password ===! confirmPassword ){
        return setconfirmPasswordError('Passwords does not match')
    }

    if( fullName && email && password && confirmPassword ){
        setShowForm2(true)
        // console.log({
            // fullName,
            // email,
            // password,
            // confirmPassword
        // })
    }
  }

  const handleform2 = (e) => {
    e.preventDefault()
    setSchoolError('')
    setLevelError('')
    setCourseError('') 

    if(!school){
        setSchoolError('Input the name of your school')
    }
    if(!level){
        setLevelError('Select an educational level')
    }
    if(!course){
        setCourseError('Input your course')
    }
    
    if(school && level && course){
        signup(
            fullName,
            email,
            password,
            confirmPassword,
            school,
            level,
            course
        );
          console.log(response)
          console.log(error)
        setShowForm2(false)
        setFullName('')
        setEmail('')
        setPassword('')
        setconfirmPassword('')
        setSchool('')
        setLevel('')
        setCourse('')
    };

  }

  return (
    <div className='signup-page-container auth-container' >
      <div className='signup-page-wrapper auth-wrapper'>
        <div className='signup-page-image-container auth-image-container'>
          <div className='signup-page-image-wrapper auth-image-wrapper'>
            {/* <img src={Image}/> */}
          </div>
        </div>

        {/* Login Form */}
        <div className='signup-form-container auth-form-container'>
          <div className='signup-form-wrapper auth-form-wrapper'>
            <h2>Sign Up</h2>
            {error && <div className='error'>{error}</div>}
           { !showForm2 &&  (<form
             className='signup-form-one'
             onSubmit={e => handleform1(e)}
             >
              <label>
                <span>Full Name</span>
                <input
                 type='text'
                 onChange={(e) => setFullName(e.target.value)}
                 value={fullName}
                />
                { fullNameError && <div className='error'>{fullNameError}</div> }
              </label>
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
                {passwordError && <div className='error'>{ passwordError }</div>}
              </label>
              <label>
                <span>Confirm Password</span>
                <input
                 type='password'
                 onChange={(e) => setconfirmPassword(e.target.value)}
                 value={confirmPassword}
                />
                { confirmPasswordError && <div className='error'>{confirmPasswordError}</div> }
              </label>
              <div className='form-button'>
                <button>Continue</button>
              </div>
              <div className='form-text'>
                Don't have an account <span><Link to='/login'>login</Link></span>
              </div>
            </form>)}
            {showForm2 && (<form
                 className='signup-form-two'
                  onSubmit={e => handleform2(e)}
                 >
                 <label>
                <span>Name of School</span>
                <input
                 type='text'
                 onChange={(e) => setSchool(e.target.value)}
                 value={school}
                />
                { schoolError && <div className='error'>{schoolError}</div> }
                </label>
                 <label>
                <span>What course do you study</span>
                <input
                 type='text'
                 onChange={(e) => setCourse(e.target.value)}
                 value={course}
                />
                { courseError && <div className='error'>{courseError}</div> }
                </label>
                <label>
                    <span> Level of Education</span>
                    <Select
                    onChange={option => setLevel(option.value)}
                     options={levels}
                    />
                    { levelError && <div className='error'>{levelError}</div> }
                </label>
                <label className='check-input'>
                    <input 
                     type='checkbox'
                    /> 
                    <div> I agree to<span className='terms'> terms and conditions </span> </div>
                </label>
               {!isLoading && <div className='form-button'>
                <button>Sign Up</button>
              </div>}
              {isLoading && <div className='form-button '>
                <button className='loading-button' disabled>Loading...</button>
              </div>}
            </form>)}
          </div>
        </div>
      </div>
    </div>
  )
}