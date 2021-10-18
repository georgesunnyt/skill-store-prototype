import { useDispatch, useSelector } from 'react-redux'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { toggleLogin } from './loginSlice'
import { useHistory } from 'react-router'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

export default function Login () {

    const type = useSelector(state=>state.login.type)
    const [error, setError] =  useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState()

    const dispatch = useDispatch()
    const history = useHistory()

    const handlekeypress = (e) => {
        console.log('inside keypress ' + e.key)
        if(e.key === 'Enter') {
            handleContinue()
        }
    }

    const handleContinue = () => {
        if(username==='admin' && password==='admin') {
            dispatch(toggleLogin({showLogin: false, type: '', username}))
            localStorage.setItem('username', username)
            history.push('/skillstore')
        }
        else if(username==='' && password==='') {
            setError('Please enter username and password')
        } else {
            setError('Invalid username and password combination')
        }
    }

    const successGoogle = (response) => {
        let username = response.profileObj.givenName
        let image = response.profileObj.imageUrl
        localStorage.setItem('username', username)
        localStorage.setItem('image', image)
        dispatch(toggleLogin({showLogin: false, type:'google', username, image}))
        history.push('/skillstore')
    }

    const failureGoogle = (response) => {
        setError("google sign in failed")
        console.log(response)
    }

    const responseFacebook = (response) => {
        console.log(response)
    }
 
    return(
        <div className='login-container'>
            <FontAwesomeIcon icon={faWindowClose} onClick={()=>dispatch(toggleLogin({showLogin: false, type:''}))}></FontAwesomeIcon>
            {type==='login'?<div className='login-title'>Sign in to your account</div>:<div className='login-title'>Create a new account</div>}
            <GoogleLogin
                clientId="785351268033-qa7gllti2p5mfam7931na6gi4uhfnp65.apps.googleusercontent.com"
                render={renderProps => (
                <button className='google-login' onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                    <span> Continue with Google </span>
                </button>
                )}
                buttonText="Login"
                onSuccess={successGoogle}
                onFailure={failureGoogle}
                cookiePolicy={'single_host_origin'}
            />
            <FacebookLogin
                appId="415261549978747"
                autoLoad={true}
                fields="name,picture"
                callback={responseFacebook}
                render={renderProps => (
                    <button className='facebook-login' onClick={renderProps.onClick}>
                        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                        <span> Continue with Facebook </span>
                    </button>
                  )} 
            />
            <div className='or'>OR</div>
            {type==='login'?
                <div>
                    <input value={username} placeholder='Username' onChange={(e)=>setUsername(e.target.value)}></input>
                </div> :
                <div>
                    <input value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)}></input>
                    <input value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></input>
                    <input value={number} placeholder='Number' onChange={(e)=>setNumber(e.target.value)}></input>
                </div>
            }
            <input type='password' value={password} placeholder='Password' onKeyPress={(e)=>handlekeypress(e)} onChange={(e)=>setPassword(e.target.value)}></input>
            {type==='login'?
                 <button className='continue' onClick={() => handleContinue()}>Continue</button> :
                 <button className='continue' onClick={() => handleContinue()}>Sign Up and Continue</button>
            }
            <div className='login-error'>{error}</div>
        </div>
    )  
}