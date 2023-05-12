import React, {useState, useEffect} from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import {ic_visibility} from 'react-icons-kit/md/ic_visibility'
import {ic_visibility_off} from 'react-icons-kit/md/ic_visibility_off'


function Login() {


  // password eye

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(ic_visibility_off)

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

  // const [list, setList] = useState([])

  // useEffect(() => {
  //   localStorage.setItem('list', JSON.stringify(list))
  // }, [list])

  // const [localstore, setLocalstore ] = useState([]);

  // localStorage.setItem()

  return (
    <div className='loginPage'>

    <form action="#" className='Login'>
      <h1>Kirish</h1>
      <label htmlFor="#">
        <input className='LoginInput' type="text" placeholder='Enter your username'/>
      </label>
      <label htmlFor="#">
        <input className='LoginInput' type={type} placeholder='password'/>
        <Icon onClick={handleToggle} className='icon_eye' icon={icon}/>
      </label>
      <button type='submit'>Kirish</button>
      <div className='footerLogin'>
        <span className='text'>Don't have an account?</span>
        <Link to={'/register'}>
        <button>Register</button>
        </Link>
      </div>

    {/* <a href="/register">to register</a>
    <br />
    <a href="/dashboard">to dashboard</a>
    <br />

    This in login page */}

    </form>
    </div>
  )
}

export default Login