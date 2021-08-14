import React,{useState} from 'react';
import SideNavBar from './SideNavBar';
import './SignUp.css'
import axios from 'axios'
const SignUp = () =>{

    const[message, updateMessage] = useState([]);

    const[name, pickName] = useState("");
    const[sex, pickSex] = useState("");
    const[age, pickAge] = useState("");
    const[contact, pickContact] = useState("");
    const[altcontact, pickAltContact] = useState("");
    const[cardid, pickCardId] = useState("");
    const[offmail, pickOffMail] = useState("");
    const[permail, pickPerMail] = useState("");
    const[designation, pickDesignation] = useState("");
    const[department, pickDepartment] = useState("");
    const[date, pickDate] = useState("");
    const[address, pickAddress] = useState(""); 

    const save = () =>{
        var empid = localStorage.getItem("id");
        var input = {
            "ename":name, 
            "esex":sex, 
            "eage":age, 
            "econtact":contact, 
            "ealtcontact":altcontact,
            "ecardid":cardid,
            "eoffmail":offmail,
            "epermail":permail,
            "edesignation":designation,
            "edepartment":department,
            "edate":date,
            "eaddress":address, 
            "empid":empid
        }
        var url = "https://eduprovapi.loca.lt/employeeinfo";
        axios.post(url,input)
        .then(response =>{
            updateMessage(response.data);
            pickName("");
            pickSex("");
            pickAge("");
            pickContact("");
            pickAltContact("");
            pickCardId("");
            pickOffMail("");
            pickPerMail("");
            pickDesignation("");
            pickDesignation("");
            pickDepartment("");
            pickDate("");
            pickAddress("");
        })
    }


    return(
        <>
        <SideNavBar/>
        <div className="container">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 ">
                    <div className="card signup-card">
                     <div className="card-body">
                         <h5>Update Employee Info</h5>
                         <p className="text-success">{message}</p>
                     <div className="row">
                          <div className="col-md-4 mt-4 mb-3">
                              <label>Name</label>
                              <input type="text" 
                              className="form-control"
                              onChange={obj=>pickName(obj.target.value)}
                               />
                          </div>
                          <div className="col-md-4 mt-4 mb-3">
                              <label>Sex</label>
                              <input type="text" 
                              className="form-control" 
                              onChange={obj=>pickSex(obj.target.value)}
                              />
                          </div>
                          <div className="col-md-4 mt-4 mb-3">
                              <label>Age</label>
                              <input type="text" 
                              className="form-control" 
                              onChange={obj=>pickAge(obj.target.value)}
                              />
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-4 mb-3">
                              <label>Contact No</label>
                              <input type="text" 
                              className="form-control" 
                              onChange={obj=>pickContact(obj.target.value)}
                              />
                          </div>
                          <div className="col-md-4 mb-3">
                              <label>Alternative Number</label>
                              <input type="text" 
                              className="form-control" 
                              onChange={obj=>pickAltContact(obj.target.value)}
                              />
                          </div>
                          <div className="col-md-4 mb-3">
                              <label>Emp ID</label>
                              <input type="text" 
                              className="form-control" 
                              onChange={obj=>pickCardId(obj.target.value)}
                              />
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-4 mb-3">
                              <label>Offical Mail ID</label>
                              <input type="text" 
                              className="form-control" 
                              onChange={obj=>pickOffMail(obj.target.value)}
                              />
                          </div>
                          <div className="col-md-4 mb-3">
                              <label>Personal Mail ID</label>
                              <input type="text" 
                              className="form-control" 
                              onChange={obj=>pickPerMail(obj.target.value)}
                              />
                          </div>
                          <div className="col-md-4 mb-3">
                              <label>Designation</label>
                              <input type="text" 
                              className="form-control" 
                              onChange={obj=>pickDesignation(obj.target.value)}
                              />
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-4 mb-3">
                              <label>Department</label>
                              <input type="text" 
                              className="form-control" 
                              onChange={obj=>pickDepartment(obj.target.value)}
                              />
                          </div>
                          <div className="col-md-4 mb-3">
                              <label>Joining Date</label>
                              <input type="text" 
                              className="form-control" 
                              onChange={obj=>pickDate(obj.target.value)}
                              />
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-12 mb-3">
                              <label>Address</label>
                             <textarea 
                             className="form-control"
                             onChange={obj=>pickAddress(obj.target.value)}
                             >

                             </textarea>
                          </div>
                        
                      </div>
                      <div>
                          <button className="btn btn-block btn-success" onClick={save}>
                              Save
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
export default SignUp

{/* <div className="card-body">
<h5 className="mb-4">Update Employee Info</h5>
 <p className="text-success">{message}</p>
<div className="row">
    <div className="col-md-6 mb-3">
        <label>Employee Name</label>
        <input type="text" 
        className="form-control" 
        />
    </div>
    <div className="col-md-6 mb-3">
    <label>Mobile No</label>
        <input type="text" 
        className="form-control" 
        onChange={obj=>pickMobile(obj.target.value)}/>
    </div>
</div>
<div className="row">
    <div className="col-md-6 mb-3">
    <label>Employee ID</label>
        <input type="text" 
        className="form-control" 
        onChange={obj=>pickCardid(obj.target.value)}
        />
    </div>
    <div className="col-md-6 mb-3">
        <label>Age</label>
        <input type="text" 
        className="form-control" 
        onChange={obj=>pickAge(obj.target.value)}
        />
    </div>
</div>
<div className="row">
    <div className="col-md-6 mb-3">
    <label>Personal Email-ID</label>
        <input type="text" 
        className="form-control" 
        onChange={obj=>pickEmail(obj.target.value)}
        />
    </div>
    <div className="col-md-6 mb-3">
    <label>Professional Email-ID</label>
        <input type="text" 
        className="form-control" 
        onChange={obj=>pickEmail(obj.target.value)}
        />
    </div>

    <div className="col-md-12 mb-3">
    <label>Address</label>
        
       <textarea className="form-control">

       </textarea>
    </div>

    
</div>
<div className="form-group mt-3">
    <button className="btn btn-primary" onClick={save}>
         Save
    </button>
</div>
</div> */}