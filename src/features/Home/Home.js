import './Home.css'
import {useDispatch} from 'react-redux'
import { toggleLogin } from '../Login/loginSlice'


export default function Home () {

    const dispatch = useDispatch()

    return (
        <div className='home-container'>
            <div className='title'>SKILL STORE</div>
            <div className='tagline'>Discover amazing new skills</div>
            <div className='sign-in-text'>
                <span>Have an account? </span>
                <button onClick={() => dispatch(toggleLogin({show:true, type:'login'}))}>Sign in</button>
                <span> or a New user? </span>
                <button onClick={() => dispatch(toggleLogin({show:true, type:'signup'}))}>Sign Up</button>
            </div>
        </div>
    )
}