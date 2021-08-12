import React from 'react';
import Login from './Components/Login'
import LoginAttendace from './Components/LoginAttendace';
import LoginOutAttendace from './Components/LogoutAttendance';
import TrackAttendance from './Components/TrackAttendance';
import ApplyForLeave from './Components/ApplyForLeave';
import Dashboard from './Components/Dashboard';
import SignUp from './Components/SignUp';
import MyProfile from './Components/MyProfile';
import SideNavBar from './Components/SideNavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  if(localStorage.getItem("id") == null){
    return(
      <Router>
         <Route exact path='/' component={Login} />
      </Router>
    )
  } else{


    return (
      <Router >
        <Route exact path='/loginattendance' component={LoginAttendace}/> 
        <Route exact path='/logoutattendance' component={LoginOutAttendace}/> 
        <Route exact path='/trackattendance' component={TrackAttendance}/> 
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/applyforleave' component={ApplyForLeave} />
        <Route exact path='/myprofile' component={MyProfile} />
        <Route exact path='/signup' component={SignUp} />
      </Router>
    );
  }
}

export default App;


