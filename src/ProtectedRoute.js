import { useDispatch } from "react-redux";
import { Redirect, Route } from "react-router";
import { toggleLogin } from "./features/Login/loginSlice";

export default function ProtectedRoute ({component: Component, username, ...rest}) {

    const dispatch = useDispatch()

    if(!username) {
        dispatch(toggleLogin({show:true, type:'login'}))
    }

    return username? 
    (<Route {...rest}>
        <Component></Component>
    </Route>) : <Redirect to='/home'></Redirect>
}