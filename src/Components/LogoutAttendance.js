import React,{useState, useEffect} from 'react';
import SideNavBar from './SideNavBar';
import axios from 'axios';
import './LoginAttendance.css'
const LogoutAttendace = () =>{


    
    const[message, updateMessage] = useState("");
    const[name, pickName] = useState("");
    const[mobile, pickMobile] = useState("");
    const[email, pickEmail] = useState("");
    const[cardid, pickCardid] = useState("");
    const[login, pickLogin] = useState("");
    const[time, pickTime] = useState("");

    const save = () =>{
        var empid = localStorage.getItem("id");
        var input = {"ename":name, "emobile":mobile, "cemail":email, "ecardid":cardid, "empid":empid, "etime":displaytime};
        var url = "http://localhost:2222/logoutattendance"
        axios.post(url, input)
        .then(response =>{
        updateMessage(response.data)
        pickName("");
        pickMobile("");
        pickEmail("");
        pickCardid("");
        
         
        })
    }

    const showdate=new Date();
    const displaytodaydate=showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
    const dt=showdate.toDateString();
    const displaytime=showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds();



    const[employee, getEmployee] = useState([])

    const FetchEmployee = () =>{
       var input ={"empid":localStorage.getItem("id")}
        var url = "http://localhost:2222/getemployeeinfo";
        axios.post(url, input)
        .then(response => getEmployee(response.data))
    }

    useEffect(()=>{
       FetchEmployee();
    },[])

    useEffect(()=>{
       FetchEmployee();
    },[])
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
                        <h5>Logout Attendance</h5>
                        {message}
                        <div className="row">
                            <div className="col-md-6">
                            <div className="form-group mb-3">
                                    <label>Time</label>
                                    <input type="text" value={displaytime } disabled={true}
                                    className="form-control" 
                                    onChange={obj=>pickTime(obj.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* {dt} - {} */}
                        <div className="form-group">
                            <button className="btn btn-primary"  onClick={save}>
                                    Submit
                            </button>
                        </div>
                        
                       </div>
                   </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
        </>
    )
}
export default LogoutAttendace