import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import Home from './features/Home/Home';
import Login from './features/Login/Login';
import { useSelector } from 'react-redux';
import Skillstore from './features/Skillstore/Skillstore';
import Skill from './features/Skill/Skill';
import ScrollToTop from './features/ScrollToTop/ScrollToTop';
import Category from './features/Category/Category';

function App() {

  const showLogin = useSelector(state=>state.login.showLogin)

  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Switch>
        <Route exact path='/home'>
          <Home></Home>
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
