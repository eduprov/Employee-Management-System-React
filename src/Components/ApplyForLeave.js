import React,{useState} from 'react';
import SideNavBar from './SideNavBar';
import './ApplyForLeave.css';
import axios from 'axios';
const ApplyForLeave = () =>{

    const[message, updateMessage] = useState("");
    const[name, pickName] = useState("");
    const[mobile, pickMobile] = useState("");
    const[cardid, pickCardid] = useState("");
    const[email, pickEmail]  = useState("");
    const[from, pickFrom] = useState("");
    const[to, pickTo] = useState("");
    const[reason, pickReason] = useState("");


    const save = () =>{
        var empid = localStorage.getItem("id");
        var input = {"ename": name, "emobile":mobile, "ecardid":cardid, "eemail":email, "efrom":from, "eto":to, "ereason":reason, "empid":empid}
        var url = "https://eduprovapi.loca.lt/applyforleave";
        axios.post(url, input)
        .then(response =>{
           updateMessage(response.data);
           pickName("");
           pickMobile("");
           pickCardid("");
           pickEmail("");
           pickFrom("");
           pickTo("");
           pickReason(""); 
        })
    }
     
    return(
        <>
         <SideNavBar/>
          
         <div className="container">
             <div className="row">
                 <div className="col-md-3"></div>
                 <div className="col-md-6 ">
                     <div className="card  card-border">
                         <div className="card-body">
                             <h5 style={{fontWeight:'bold'}}> Apply For Leave</h5>
                             <p>{message}</p>
                           <div className="row">
                               <div className="col-md-6 mt-2 mb-2">
                                   <label>Employee Name</label>
                                   <input type="text" 
                                   className="form-control" 
                                   onChange={obj=>pickName(obj.target.value)}
                                   />
                               </div>
                               <div className="col-md-6 mt-2 mb-2">
                               <label>Mobile No</label>
                                   <input type="text" 
                                   className="form-control" 
                                   onChange={obj=>pickMobile(obj.target.value)}
                                   />
                               </div>
                           </div>
                           <div className="row">
                               <div className="col-md-6 mt-2 mb-2">
                                   <label>Employee ID</label>
                                   <input type="text" 
                                   className="form-control" 
                                   onChange={obj=>pickCardid(obj.target.value)}
                                   />
                               </div>
                               <div className="col-md-6 mt-2 mb-2">
                               <label>Email-ID</label>
                                   <input type="text" 
                                   className="form-control" 
                                   onChange={obj=>pickEmail(obj.target.value)}
                                   />
                               </div>
                           </div>
                           <div className="row">
                               <div className="col-md-6 mt-2 mb-2">
                                   <label>From </label>
                                   <input type="date" 
                                   className="form-control" 
                                   onChange={obj=>pickFrom(obj.target.value)}
                                   />
                               </div>
                               <div className="col-md-6 mt-2 mb-2">
                               <label>To</label>
                                   <input type="date" 
                                   className="form-control" 
                                   onChange={obj=>pickTo(obj.target.value)}
                                   />
                               </div>
                           </div>
                           <div className="row">
                               <div className="col-md-12 mt-2 mb-4">
                                   <label>Reason </label>
                                 <textarea 
                                 className="form-control"
                                 onChange={obj=>pickReason(obj.target.value)}
                                 > 

                                 </textarea>
                               </div>
                              
                           </div>
                           <div className="form-group">
                               <button className="btn btn-primary" onClick={save}>
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
export default ApplyForLeave