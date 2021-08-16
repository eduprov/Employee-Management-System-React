import React,{useState} from 'react';
import SideNavBar from './SideNavBar';
import './SignUp.css'
import axios from 'axios'
import { useForm } from "react-hook-form";
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

    const { register, handleSubmit } = useForm();

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
                              {...register("name", { required: true })}
                              onChange={obj=>pickName(obj.target.value)}
                               />
                          </div>
                          <div className="col-md-4 mt-4 mb-3">
                              <label>Gender</label>
                              <input type="text" 
                              className="form-control" 
                              {...register("gender", { required: true })}
                              onChange={obj=>pickSex(obj.target.value)}
                              />
                          </div>
                          <div className="col-md-4 mt-4 mb-3">
                              <label>Age</label>
                              <input type="text" 
                              className="form-control" 
                              {...register("age", { required: true })}
                              onChange={obj=>pickAge(obj.target.value)}
                              />
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-4 mb-3">
                              <label>Contact No</label>
                              <input type="text" 
                              className="form-control" 
                              {...register("contact", { required: true })}
                              onChange={obj=>pickContact(obj.target.value)}
                              />
                          </div>
                          <div className="col-md-4 mb-3">
                              <label>Alternative Number</label>
                              <input type="text" 
                              className="form-control"
                              {...register("altcontact", { required: true })} 
                              onChange={obj=>pickAltContact(obj.target.value)}
                              />
                          </div>
                          <div className="col-md-4 mb-3">
                              <label>Emp ID</label>
                              <input type="text" 
                              className="form-control" 
                              {...register("empid", { required: true })}
                              onChange={obj=>pickCardId(obj.target.value)}
                              />
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-4 mb-3">
                              <label>Offical Mail ID</label>
                              <input type="text" 
                              className="form-control" 
                              {...register("offmailid", { required: true })}
                              onChange={obj=>pickOffMail(obj.target.value)}
                              />
                          </div>
                          <div className="col-md-4 mb-3">
                              <label>Personal Mail ID</label>
                              <input type="text" 
                              className="form-control" 
                              {...register("permailid", { required: true })}
                              onChange={obj=>pickPerMail(obj.target.value)}
                              />
                          </div>
                          <div className="col-md-4 mb-3">
                              <label>Designation</label>
                              <input type="text" 
                              className="form-control" 
                              {...register("designation", { required: true })}
                              onChange={obj=>pickDesignation(obj.target.value)}
                              />
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-4 mb-3">
                              <label>Department</label>
                              <input type="text" 
                              className="form-control" 
                              {...register("department", { required: true })}
                              onChange={obj=>pickDepartment(obj.target.value)}
                              />
                          </div>
                          <div className="col-md-4 mb-3">
                              <label>Joining Date</label>
                              <input type="text" 
                              className="form-control"
                              {...register("joiningdate", { required: true })}
                              onChange={obj=>pickDate(obj.target.value)}
                              />
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-12 mb-3">
                              <label>Address</label>
                             <textarea 
                             className="form-control"
                             {...register("address", { required: true })}
                             onChange={obj=>pickAddress(obj.target.value)}
                             >

                             </textarea>
                          </div>
                        
                      </div>
                      <div>
                          <button className="btn btn-block btn-success" onClick={handleSubmit(save)}>
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