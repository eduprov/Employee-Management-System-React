import React,{useState, useEffect} from 'react';
import SideNavBar from './SideNavBar';
import './MyProfile.css';
import axios from 'axios';
import {Link} from 'react-router-dom'
import man from './man.png'
import { Modal, Button } from "react-bootstrap";
const MyProfile = () =>{
   
    const[name, processName] = useState("");
    const[sex, processSex] = useState("")
    const[age, processAge] = useState("");
    const[contact, processContact] = useState("");
    const[altcont, processAltMobile] = useState("");
    const[cardid, processCardId] = useState("");
    const[offmail, processMail] = useState("");
    const[permail, processPermail] = useState("");
    const[designation, processDesignation] = useState("");
    const[department, processDepartment] = useState("");
    const[joiningdate, processJoiningDate] = useState("");
    const[address, processAddress] = useState("");

    const getInfo = () =>{
        var url = "http://localhost:2222/fetchemployeeinfo";
        var input ={"empid":localStorage.getItem("id")};
        axios.post(url, input)
        .then(response =>{
            processName(response.data[0].name)
            processSex(response.data[0].sex)
            processAge(response.data[0].age)
            processContact(response.data[0].contact)
            processAltMobile(response.data[0].altcont)
            processCardId(response.data[0].cardid)
            processMail(response.data[0].offmail)
            processPermail(response.data[0].permail)
            processDesignation(response.data[0].designation)
            processDepartment(response.data[0].department)
            processJoiningDate(response.data[0].joiningdate)
            processAddress(response.data[0].address)
        })
    }

    useEffect(()=>{
       getInfo();
    },[])


    const [login, setLogin] = useState(false);
    const loginhandleClose = () => setLogin(false);
    const loginModal = () => setLogin(true);

    return(
        <>
          <SideNavBar/>
        <div className="container">
         <div className="row">
             <div className="col-md-1"></div>
             <div className="col-md-10 mt-4">
                 <div className="card myprofile-card">
                     <div className="card-body">
                         <h5>Employee Information</h5>
                         <div className="row mt-4">
                             <div className="col-md-4">
                                 <div className="form-group mb-1">
                                     <label>Full Name</label>
                                     <input type="text" value={name} disabled={true}
                                     className="form-control" />
                                 </div>
                             </div>
                             <div className="col-md-4">
                                 <div className="form-group mb-1">
                                     <label>Sex</label>
                                     <input type="text" value={sex} disabled={true}
                                     className="form-control" />
                                 </div>
                             </div>
                             <div className="col-md-4">
                                 <div className="form-group mb-1">
                                     <label>Age</label>
                                     <input type="text" value={age} disabled={true}
                                     className="form-control" />
                                 </div>
                             </div>
                         </div>
                         <div className="row mt-3">
                             <div className="col-md-4">
                                 <div className="form-group mb-1">
                                     <label>Contact No</label>
                                     <input type="text" value={contact} disabled={true}
                                     className="form-control" />
                                 </div>
                             </div>
                             <div className="col-md-4">
                                 <div className="form-group mb-1">
                                     <label>Alt Contact No</label>
                                     <input type="text" value={altcont} disabled={true}
                                     className="form-control" />
                                 </div>
                             </div>
                             <div className="col-md-4">
                                 <div className="form-group mb-1">
                                     <label>Emp ID</label>
                                     <input type="text" value={cardid} disabled={true}
                                     className="form-control" />
                                 </div>
                             </div>
                         </div>
                         <div className="row mt-3">
                             <div className="col-md-4">
                                 <div className="form-group mb-1">
                                     <label>Offical Mail ID</label>
                                     <input type="text" value={offmail} disabled={true}
                                     className="form-control" />
                                 </div>
                             </div>
                             <div className="col-md-4">
                                 <div className="form-group mb-1">
                                     <label>Personal Mail ID</label>
                                     <input type="text" value={permail} disabled={true}
                                     className="form-control" />
                                 </div>
                             </div>
                             <div className="col-md-4">
                                 <div className="form-group mb-1">
                                     <label>Designation</label>
                                     <input type="text" value={designation} disabled={true}
                                     className="form-control" />
                                 </div>
                             </div>
                         </div>
                         <div className="row mt-3">
                             <div className="col-md-4">
                                 <div className="form-group mb-1">
                                     <label>Department</label>
                                     <input type="text" value={department} disabled={true}
                                     className="form-control" />
                                 </div>
                             </div>
                             <div className="col-md-4">
                                 <div className="form-group mb-1">
                                     <label>Joining Date</label>
                                     <input type="text" value={joiningdate} disabled={true}
                                     className="form-control" />
                                 </div>
                             </div>
                          
                         </div>
                         <div className="row mt-3">
                             <div className="col-md-12">
                                 <div className="form-group mb-1">
                                     <label>Address</label>
                                     <textarea className="form-control" 
                                     value={address} disabled={true}
                                     >

                                     </textarea>

                                 </div>
                             </div>
                         </div>
                         <div className="row mt-3">
                             <div className="col-md-1"></div>
                             <div className="col-md-2">
                               <button className="btn btn-success" onClick={loginModal}>
                                       Login
                               </button>
                             </div>
                             <div className="col-md-3">
                               <button className="btn btn-primary text-white" >
                                       Lunch Break in
                               </button>
                             </div>
                             <div className="col-md-3">
                               <button className="btn btn-info text-white" >
                                       Lunch Break out
                               </button>
                             </div>
                             <div className="col-md-2">
                               <button className="btn btn-danger text-white" >
                                       Logout
                               </button>
                             </div>
                         </div>
                         
                     </div>
                 </div>
             </div>
             <div className="col-md-3 mt-5">
           
             </div>
         </div>
        </div>

        <Modal show={login} onHide={loginhandleClose}>
        <Modal.Header closeButton>
         
          <Modal.Title>Login Time</Modal.Title>
        </Modal.Header>
          <p className="text-center text-success"> </p>
        <Modal.Body>
        
       
          
             
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={loginhandleClose}>
            Close
          </Button>
          <Button variant="primary" >
             Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )


}
const logout = () =>{
    localStorage.clear();
    window.location.href="http://localhost:3000";
}

export default MyProfile;