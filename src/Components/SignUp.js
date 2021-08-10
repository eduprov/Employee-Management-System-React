import React,{useState} from 'react';
import SideNavBar from './SideNavBar';
import './SignUp.css'
import axios from 'axios'
const SignUp = () =>{

    const[message, updateMessage] = useState([]);

    const[name, pickName] = useState("");
    const[mobile, pickMobile] = useState("");
    const[cardid, pickCardid] = useState("");
    const[age, pickAge] = useState("");
    const[email, pickEmail] = useState("");

    const save = () =>{
        var empid = localStorage.getItem("id");
        var input = {"ename":name, "emobile":mobile, "ecardid":cardid, "eage":age, "eemail":email, "empid":empid}
        var url = "http://localhost:2222/employeeinfo";
        axios.post(url,input)
        .then(response =>{
            updateMessage(response.data);
            pickName("");
            pickMobile("");
            pickCardid("");
            pickAge("");
            pickEmail("");
        })
    }


    return(
        <>
        <SideNavBar/>
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 mt-5">
                    <div className="card signup-card">
                        <div className="card-body">
                           <h5 className="mb-4">Update Employee Info</h5>
                            <p className="text-success">{message}</p>
                           <div className="row">
                               <div className="col-md-6 mb-3">
                                   <label>Employee Name</label>
                                   <input type="text" 
                                   className="form-control" 
                                   onChange={obj=>pickName(obj.target.value)} />
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
                               <div className="col-md-12 mb-3">
                               <label>Personal Email-ID</label>
                                   <input type="text" 
                                   className="form-control" 
                                   onChange={obj=>pickEmail(obj.target.value)}
                                   />
                               </div>
                           </div>
                           <div className="form-group mt-3">
                               <button className="btn btn-primary" onClick={save}>
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