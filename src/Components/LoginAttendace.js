import React,{useState} from 'react';
import SideNavBar from './SideNavBar';
import './LoginAttendance.css'
const LoginAttendace = () =>{

    return(
        <>
          <SideNavBar/>
        <div className="container">
            <div className="row">
                <div className="col-md-12">

                </div>
                <div className="col-md-3"></div>
                <div className="col-md-6 mt-5 pt-5">
                   <div className="card mt-5 attendance-card">
                       <div className="card-body">
                        
                        
                       </div>
                   </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
        </>
    )
}
export default LoginAttendace