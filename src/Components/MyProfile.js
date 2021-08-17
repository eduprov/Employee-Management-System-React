import React,{useState, useEffect} from 'react';
import SideNavBar from './SideNavBar';
import './MyProfile.css';
import axios from 'axios';
import {Link} from 'react-router-dom'
import man from './man.png'
import { Modal, Button } from "react-bootstrap";
const MyProfile = () =>{

    const[message, updateMessage] = useState("");
   
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
        var url = "https://naveen.loca.lt/fetchemployeeinfo";
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
            console.log(response.data)
        })
    }

    useEffect(()=>{
       getInfo();
    },[])

    // 

    const showdate=new Date();
    const displaytodaydate=showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
    const dt=showdate.toDateString();
    const displaytime=showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds();


    const [login, setLogin] = useState(false);
    const loginhandleClose = () => setLogin(false);
    const loginModal = () => setLogin(true);


    const [logout, setLogout] = useState(false);
    const logouthandleClose = () => setLogout(false);
    const logoutModal = () => setLogout(true);

    const [lunch, setLunch] = useState(false);
    const lunchhandleClose = () => setLunch(false);
    const lunchModal = () => setLunch(true);

    const [lunchout, setLunchout] = useState(false);
    const lunchouthandleClose = () => setLunchout(false);
    const lunchoutModal = () => setLunchout(true);




    const[date, processDate] = useState("");
    const[time, processTime] = useState("");
    const save = () =>{
        var empid = localStorage.getItem("id");
        var input = {"ename":name, "econtact":contact, "ecardid":cardid, "edate":dt, "etime":displaytime, "empid":empid};
        var url = "https://naveen.loca.lt/attendance";
        axios.post(url, input)
        .then(response =>{
            updateMessage(response.data);
            
        })
    }


 

    const LunchIn = () =>{
        var empid = localStorage.getItem("id");
        var input = {"ename":name, "econtact":contact, "ecardid":cardid, "edate":dt, "etime":displaytime, "empid":empid};
        // var input = {"etime":displaytime, "elunchout":lunchout, "elunchbreakout":lunchbreakout, "empid":empid}
        var url = "https://naveen.loca.lt/lunchbreakin";
        axios.post(url, input)
        .then(response =>{
            updateMessage(response.data);
        })
    }

    const LunchOut = () =>{
        var empid = localStorage.getItem("id");
        var input = {"ename":name, "econtact":contact, "ecardid":cardid, "edate":dt, "etime":displaytime, "empid":empid};
        // var input = {"etime":displaytime, "elunchout":lunchout, "elunchbreakout":lunchbreakout, "empid":empid}
        var url = "https://naveen.loca.lt/lunchbreakout";
        axios.post(url, input)
        .then(response =>{
            updateMessage(response.data);
        })
    }

    const LogOut = () =>{
        var empid = localStorage.getItem("id");
        var input = {"ename":name, "econtact":contact, "ecardid":cardid, "edate":dt, "etime":displaytime, "empid":empid};
        // var input = {"etime":displaytime, "elunchout":lunchout, "elunchbreakout":lunchbreakout, "empid":empid}
        var url = "https://naveen.loca.lt/logout";
        axios.post(url, input)
        .then(response =>{
            updateMessage(response.data);
        })
    }

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
                                     <label>Gender</label>
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
                         <div className="col-md-2"></div>
                         <div className="row mt-3">
                             <div className="col-md-2"></div>
                            
                             <div className="col-md-2">
                               <button className="btn btn-success" onClick={loginModal}>
                                       Login
                               </button>
                             </div>
                             <div className="col-md-2">
                               <button className="btn btn-warning text-white" onClick={lunchModal}>
                                    Break in
                               </button>
                             </div>
                             <div className="col-md-2">
                               <button className="btn btn-success text-white" onClick={lunchoutModal}>
                                       Break out
                               </button>
                             </div>
                             <div className="col-md-2">
                               <button className="btn btn-danger text-white" onClick={logoutModal}>
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

          {/* Login Modal */}
        <Modal show={login} onHide={loginhandleClose}>
        <Modal.Header closeButton>
         
          <Modal.Title>Login Time</Modal.Title>
        </Modal.Header>
          <p className="text-center text-success"> </p>
        <Modal.Body>
               <p>{message}</p>
          
               <div className="form-group mb-3">
                  <label>Name</label>
                  <input type="text" 
                  className="form-control"
                   value={name} 
                   onChange={obj=>processName(obj.target.value)}
                   disabled={true} 
                   /> 
               </div>
               <div className="form-group mb-3">
                  <label>Contact No</label>
                  <input type="text"
                   className="form-control" 
                   value={contact}
                   onChange={obj=>processContact(obj.target.value)}
                   disabled={true} 
                    /> 
               </div>
               <div className="form-group mb-3">
                  <label>Emp ID</label>
                  <input type="text" 
                  className="form-control" 
                  value={cardid} 
                  onChange={obj=>processCardId(obj.target.value)}
                  disabled={true} 
                  /> 
               </div>
               <div className="form-group mb-3">
                  <label>Date</label>
                  <input type="text" 
                  className="form-control"  
                  value={dt} 
                  onChange={obj=>processDate(obj.target.value)}
                  disabled={true} 
                  /> 
               </div>
               <div className="form-group mb-3">
                  <label>Time</label>
                  <input type="text" className="form-control" 
                  onChange={obj=>processTime(obj.target.value)}
                  value={displaytime } 
                  disabled={true}  
                  /> 
               </div>

       
          
             
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={loginhandleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={save}>
             Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={lunch} onHide={lunchhandleClose}>
        <Modal.Header closeButton>
         
          <Modal.Title>Lunch Break in Time</Modal.Title>
        </Modal.Header>
          <p className="text-center text-success"> </p>
        <Modal.Body>
               <p>{message}</p>

               <div className="form-group mb-3">
                  <label>Name</label>
                  <input type="text" 
                  className="form-control"
                   value={name} 
                   onChange={obj=>processName(obj.target.value)}
                   disabled={true} 
                   /> 
               </div>
               <div className="form-group mb-3">
                  <label>Contact No</label>
                  <input type="text"
                   className="form-control" 
                   value={contact}
                   onChange={obj=>processContact(obj.target.value)}
                   disabled={true} 
                    /> 
               </div>
               <div className="form-group mb-3">
                  <label>Emp ID</label>
                  <input type="text" 
                  className="form-control" 
                  value={cardid} 
                  onChange={obj=>processCardId(obj.target.value)}
                  disabled={true} 
                  /> 
               </div>
               <div className="form-group mb-3">
                  <label>Date</label>
                  <input type="text" 
                  className="form-control"  
                  value={dt} 
                  onChange={obj=>processDate(obj.target.value)}
                  disabled={true} 
                  /> 
               </div>
        
               <div className="form-group mb-3">
                  <label>Lunch Break in</label>
                  <input type="text" className="form-control" 
                  onChange={obj=>processTime(obj.target.value)}
                  value={displaytime} 
                  disabled={true}  
                  /> 
               </div>
             
       
          
             
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={lunchhandleClose}>
            Close
          </Button>
          <Button variant="info text-white" onClick={LunchIn}>
             Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={lunchout} onHide={lunchouthandleClose}>
        <Modal.Header closeButton>
         
          <Modal.Title>Lunch Break out Time</Modal.Title>
        </Modal.Header>
          <p className="text-center text-success"> </p>
        <Modal.Body>
               <p>{message}</p>

               <div className="form-group mb-3">
                  <label>Name</label>
                  <input type="text" 
                  className="form-control"
                   value={name} 
                   onChange={obj=>processName(obj.target.value)}
                   disabled={true} 
                   /> 
               </div>
               <div className="form-group mb-3">
                  <label>Contact No</label>
                  <input type="text"
                   className="form-control" 
                   value={contact}
                   onChange={obj=>processContact(obj.target.value)}
                   disabled={true} 
                    /> 
               </div>
               <div className="form-group mb-3">
                  <label>Emp ID</label>
                  <input type="text" 
                  className="form-control" 
                  value={cardid} 
                  onChange={obj=>processCardId(obj.target.value)}
                  disabled={true} 
                  /> 
               </div>
               <div className="form-group mb-3">
                  <label>Date</label>
                  <input type="text" 
                  className="form-control"  
                  value={dt} 
                  onChange={obj=>processDate(obj.target.value)}
                  disabled={true} 
                  /> 
               </div>
        
               <div className="form-group mb-3">
                  <label>Lunch Break out</label>
                  <input type="text" className="form-control" 
                  onChange={obj=>processTime(obj.target.value)}
                  value={displaytime} 
                  disabled={true}  
                  /> 
               </div>
          
             
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={lunchouthandleClose}>
            Close
          </Button>
          <Button variant="info text-white" onClick={LunchOut}>
             Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={logout} onHide={logouthandleClose}>
        <Modal.Header closeButton>
         
          <Modal.Title>Logout Time</Modal.Title>
        </Modal.Header>
          <p className="text-center text-success"> </p>
        <Modal.Body>
               <p>{message}</p>
          
               <div className="form-group mb-3">
                  <label>Name</label>
                  <input type="text" 
                  className="form-control"
                   value={name} 
                   onChange={obj=>processName(obj.target.value)}
                   disabled={true} 
                   /> 
               </div>
               <div className="form-group mb-3">
                  <label>Contact No</label>
                  <input type="text"
                   className="form-control" 
                   value={contact}
                   onChange={obj=>processContact(obj.target.value)}
                   disabled={true} 
                    /> 
               </div>
               <div className="form-group mb-3">
                  <label>Emp ID</label>
                  <input type="text" 
                  className="form-control" 
                  value={cardid} 
                  onChange={obj=>processCardId(obj.target.value)}
                  disabled={true} 
                  /> 
               </div>
               <div className="form-group mb-3">
                  <label>Date</label>
                  <input type="text" 
                  className="form-control"  
                  value={dt} 
                  onChange={obj=>processDate(obj.target.value)}
                  disabled={true} 
                  /> 
               </div>
               <div className="form-group mb-3">
                  <label>Time</label>
                  <input type="text" className="form-control" 
                  onChange={obj=>processTime(obj.target.value)}
                  value={displaytime } 
                  disabled={true}  
                  /> 
               </div>

       
          
             
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={logouthandleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={LogOut}>
             Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



        </>
    )


}
// const logout = () =>{
//     localStorage.clear();
//     window.location.href="http://localhost:3000";
// }

export default MyProfile;