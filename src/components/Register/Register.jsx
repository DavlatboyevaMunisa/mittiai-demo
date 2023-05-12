import React, {useState} from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import { SiGoogle } from 'react-icons/si'
import { Icon } from 'react-icons-kit'
import {ic_visibility} from 'react-icons-kit/md/ic_visibility'
import {ic_visibility_off} from 'react-icons-kit/md/ic_visibility_off'

function Register() {

  // password eye

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(ic_visibility_off);

  const handleToggle = () => {
    if(type === 'password'){
      setIcon(ic_visibility);
      setType('text');
    }
    else{
      setIcon(ic_visibility_off);
      setType('password')
    }
  }

  // login localStorage

  

  return (
    <>
    <div className='RegisterPage'>

      <form action="#" className='Register'>
         <h1>Kirish</h1>
          <label htmlFor="#">
             <input className='RegisterInput' type="text" placeholder='Enter your username'/>
          </label>
          <label htmlFor="#">
             <input className='RegisterInput' type="email" placeholder='email' required/>
          </label>
          <label htmlFor="#">
             <input className='RegisterInput' type="text" placeholder='login'/>
          </label>
          <label htmlFor="#">
            <input className='RegisterInput' type={type} placeholder='password' required/>
              <Icon onClick={handleToggle} className='icon_eye' icon={icon}/>
          </label>
          <Link to={'/dashboard'}>
          <button type='submit'>Kirish</button>
          </Link>
          <div className='footerRegister'>
          <SiGoogle className='icon'/>
          <span className='text'>With in google account</span>
              <Link to={'/'}>
                <button>Kirish</button>
              </Link>
    </div>
  </form>
</div>
    </>
  )
}

export default Register