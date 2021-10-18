import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import Home from './features/Home/Home';
import Login from './features/Login/Login';
import { useSelector } from 'react-redux';
import Skillstore from './features/Skillstore/Skillstore';
import Skill from './features/Skill/Skill';
import ScrollToTop from './features/ScrollToTop/ScrollToTop';
import Category from './features/Category/Category';
import Navbar from './features/Navbar/Navbar';

function App() {

  const showLogin = useSelector(state=>state.login.showLogin)
  const username = useSelector(state=>state.login.name)

  return (
    <>
      {username? <Navbar></Navbar>: null}
      <ScrollToTop></ScrollToTop>
      <Switch>
        <Route exact path='/home'>
          {username? <Redirect to='/skillstore'></Redirect> : <Home></Home>}
        </Route>
        <Route exact path='/skillstore'>
          <Skillstore></Skillstore>
        </Route>
        <Route exact path='/skill/:skill'>
          <Skill></Skill>
        </Route>
        <Route exact path='/category/:category'>
          <Category></Category>
        </Route>
        <Redirect from='/' to='/home'></Redirect>
      </Switch>
      {showLogin?<Login></Login>: null}
    </>
  );
}

export default App;
