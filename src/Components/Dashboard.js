import React,{useState, useEffect}from 'react';
import './Dashboard.css'
import SideNavBar from './SideNavBar';
import axios from 'axios';
import {Link} from 'react-router-dom'
import man from './man.png'

const Dashboard = () =>{
   

    // const[message, updateMessage] = useState("");
    // const[photo, processPhoto] = useState("");

    // const getInfo = () =>{
    //     var url = "http://localhost:5005/fetchemployeeinfo";
    //     var input ={"empid":localStorage.getItem("id")};
    //     axios.post(url, input)
    //     .then(response =>{
    //         processPhoto(response.data[0].photo)
    //         console.log(response.data)
    //     })
    // }

    // useEffect(()=>{
    //    getInfo();
    // },[])

    return(

        <>
        <SideNavBar/>
        <div className="container ">
            <div className="row">
               <div className="col-md-2 ">
             
               </div>
               <Link to="/myprofile" className="col-md-3 mt-5">
               <img src={man} className="profile-pic" />  
               </Link>
               <div className="col-md-4">
               
               </div>
               <div className="col-md-3 mt-5 pt-4">
                 

                <Link className="logout" onClick={logout}>
                  <li class="fa fa-power-off text-danger"></li> <span className="text-danger">Logout</span>
            
              </Link>
               </div>
            </div>
            <div className="row">
                <div className="col-md-2">
               
                </div>
             
                <div className="col-lg-3">
                <div className="card dashboard-cards interested">
                        <div className="card-body">
                            <h3 className="card-numbers"></h3> <i class="fa fa-paper-plane icons"></i>
                            <h4 className="card-title">Apply For Leave</h4>
                            <Link  to='/applyforleave'><i class="fas fa-arrow-circle-right text-white fa-2x"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className="card dashboard-cards total-admissions">
                        <div className="card-body">
                            <h3 className="card-numbers"></h3> <i class="fas fa-rupee-sign icons"></i>
                            <h4 className="card-title">Payslip</h4>
                            <Link ><i class="fas fa-arrow-circle-right text-white fa-2x"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className="card dashboard-cards dues-followup">
                        <div className="card-body">
                            <h3 className="card-numbers"></h3> <i class="fas fa-ticket-alt icons"></i>
                            <h4 className="card-title">Raise Support</h4>
                            <Link ><i class="fas fa-arrow-circle-right text-white fa-2x"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2"></div>
              
                <div className="col-lg-3">
                <div className="card dashboard-cards profile-update">
                        <div className="card-body">
                            <h3 className="card-numbers"></h3> <i class="far fa-user icons"></i>
                            <h4 className="card-title">Update Profile</h4>
                            <Link to="/signup" ><i class="fas fa-arrow-circle-right text-white fa-2x"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
               
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>

        </>
    )
}

const logout = () =>{
    localStorage.clear();
    window.location.href="http://localhost:3000";
}

export default Dashboard
