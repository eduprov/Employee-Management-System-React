import React,{useState, useEffect} from 'react';
import SideNavBar from './SideNavBar';
import './MyProfile.css';
import axios from 'axios';
import {Link} from 'react-router-dom'
import man from './man.png'
const MyProfile = () =>{
   
    const[name, processName] = useState("");
    const[mobile, processMobile] = useState("");
    const[cardid, processCardid] = useState("");
    const[age, processAge] = useState("");
    const[pemail, processPemail] = useState("");
    const[email, processEmail] = useState("");

    const getInfo = () =>{
        var url = "http://localhost:2222/fetchemployeeinfo";
        var input ={"empid":localStorage.getItem("id")};
        axios.post(url, input)
        .then(response =>{
            processName(response.data[0].name)
            processMobile(response.data[0].mobile)
            processCardid(response.data[0].cardid)
            processAge(response.data[0].age)
            processPemail(response.data[0].pemail)
            // processEmail(response.data[0].email)
        })
    }

    useEffect(()=>{
       getInfo();
    },[])

    return(
        <>
          <SideNavBar/>
        <div className="container">
         <div className="row">
             <div className="col-md-2"></div>
             <div className="col-md-6 mt-5">
                 <div className="card myprofile-card">
                     <div className="card-body">
                      <h4>Employee Information</h4>      

                      <div className="row">
                      <div className="col-md-6 mt-3">
                      <div className="form-group mb-3">
                      <label className="mb-1">Mobile No</label>
                      <input type="text" className="form-control" value={mobile} disabled={true} />
                      </div>
                      </div>
                      <div className="col-md-6 mt-3">
                      <div className="form-group mb-3">
                      <label className="mb-1">Employee-ID</label>
                      <input type="text" className="form-control" value={cardid} disabled={true} />
                      </div>
                      </div>
                      </div>
                      <div className="row">
                      <div className="col-md-6 ">
                      <div className="form-group mb-3">
                      <label className="mb-1">Age</label>
                      <input type="text" className="form-control" value={age} disabled={true} />
                      </div>
                      </div>
                      <div className="col-md-6">
                      <div className="form-group mb-3">
                      <label className="mb-1">Personal Email-ID</label>
                      <input type="text" className="form-control" value={pemail} disabled={true} />
                      </div>
                      </div>
                      </div>
                      <div className="row">
                      <div className="col-md-12 ">
                      <div className="form-group mb-3">
                      <label className="mb-1">Address</label>
                       <textarea className="form-control" disabled={true}>
                          
                       </textarea>
                      </div>
                      </div>
                     
                      </div>

                      <div className="row mt-4">
                     
                       {/* <h5>Days Present</h5> */}
                      </div>

                     </div>
                 </div>
             </div>
             <div className="col-md-3 mt-5">
             <div className="card profile-card">
                     <div className="card-body ">
                      <div className="profile-name">
                      <img src={man}  /> 
                       
                      </div>
                      <h5 className="text-center mt-2">{name}</h5>
                      {/* <h6 className="text-center">{pemail}</h6> */}
                      <div className="text-center">
                      <Link className="logout" onClick={logout}>
                        <li class="fa fa-power-off text-danger"></li> <span className="text-danger">Logout</span>
                    
                    </Link>
                      </div>
                     </div>

                 </div>
             </div>
         </div>
        </div>
        </>
    )


}
const logout = () =>{
    localStorage.clear();
    window.location.href="http://localhost:3000";
}

export default MyProfile;