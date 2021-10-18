import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import {logout} from '../Login/loginSlice'
import './Navbar.css'

export default function Navbar () {

    const history = useHistory()
    const {name, image} = useSelector(state=>state.login)
    const dispatch = useDispatch()
    
    const handleLogout = () => {
        localStorage.clear()
        dispatch(logout())
        history.push('/home')
    }

    return (
        <div className='nav-container'>
            <div className='nav-title' onClick={()=>history.push('/skillstore')}>Skill Store</div>
            <div className='nav-end'>
                <div>{name}</div>
                {image? <img src={image} alt='a persons face'></img> : <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>}
                <button onClick={()=>handleLogout()}> Logout</button>
            </div>
        </div>
    )
}