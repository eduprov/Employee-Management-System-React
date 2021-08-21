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
        var url = "http://localhost:5005/applyforleave";
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
                
               <div className="col-md-6 ">
                   <div className="card card-border">
                       <div className="card-body">
                           <h5 className="mb-3">Apply For Leave</h5>
                           <p>{message}</p>
                           <div className="row">

                            <div className="col-md-6">
                            <div className="form-group mb-3">
                           <label>Name</label>
                           <input type="text" 
                           className="form-control"
                           onChange={obj=>pickName(obj.target.value)} />
                           </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group mb-3">
                           <label>Mobile No</label>
                           <input type="text" 
                           className="form-control" 
                           onChange={obj=>pickMobile(obj.target.value)}/>
                           </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group mb-3">
                           <label>Emp ID</label>
                           <input type="text" 
                           className="form-control" 
                           onChange={obj=>pickCardid(obj.target.value)}/>
                           </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group mb-3">
                           <label>From Date</label>
                           <input type="date" 
                           className="form-control" 
                           onChange={obj=>pickFrom(obj.target.value)}/>
                           </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group mb-3">
                           <label>To Date</label>
                           <input type="date" 
                           className="form-control" 
                           onChange={obj=>pickTo(obj.target.value)}/>
                           </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group mb-3">
                           <label>Reason</label>
                           <select className="form-control" onChange={obj=>pickReason(obj.target.value)}>
                                    <option>Choose..</option>
                                    <option>Casual Leave(CL)</option>
                                    <option>Sick Leave (SL)</option>
                                    <option>Earned Leave (EL)</option>
                                    <option>Marriage Leave</option>
                                    <option>Maternity Leaves</option>
                                    <option>Paternity Leaves</option>
                                    <option>Loss of Pay (LOP)</option>
                                    <option>Half Pay Leave</option>
                            </select>
                           </div>
                            </div>

                           </div>
                           <div className="form-group">
                               <button className="btn btn-success" onClick={save}>
                                   Submit
                               </button>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="col-md-6 mt-5 pt-5">
               <table className="table table-bordered table-sm text-center " >
                       <thead>
                           <tr>
                               <th>Leaves</th>
                               <th>Leaves in a Year</th>
                           </tr>
                       </thead>
                       <tbody>
                           <tr>
                               <th>Casual Leave (CL)</th>
                               <td>8</td>
                           </tr>
                           <tr>
                               <th>Sick Leave (SL)</th>
                               <td>12</td>
                           </tr>
                           <tr>
                               <th>Earned Leave (EL)</th>
                               <td>20</td>
                           </tr>
                           <tr>
                               <th>Marriage Leave</th>
                               <td>15</td>
                           </tr>
                           <tr>
                               <th>Maternity Leaves</th>
                               <td>45</td>
                           </tr>
                           <tr>
                               <th>Paternity Leaves</th>
                               <td>5</td>
                           </tr>
                           <tr>
                               <th>Loss of Pay (LOP)</th>
                               <td></td>
                           </tr>
                           <tr>
                               <th>Half Pay Leave</th>
                               <td></td>
                           </tr>
                       </tbody>
                      
                   </table>
               </div>
             </div>
         </div>
        </>
    )

}
export default ApplyForLeave


{/* <div className="card  card-border">
<div className="card-body">
    <h5 style={{fontWeight:'bold'}}> Apply For Leave</h5>
    <p>{message}</p>
  <div className="row">
      <div className="col-md-6 mt-2 mb-2">
          <label>Employee Name</label>
          <input type="text" 
          className="form-control" 
         
          />
      </div>
      <div className="col-md-6 mt-2 mb-2">
      <label>Mobile No</label>
          <input type="text" 
          className="form-control" 
         
          />
      </div>
  </div>
  <div className="row">
      <div className="col-md-6 mt-2 mb-2">
          <label>Employee ID</label>
          <input type="text" 
          className="form-control" 
         
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
         
          />
      </div>
      <div className="col-md-6 mt-2 mb-2">
      <label>To</label>
          <input type="date" 
          className="form-control" 
         
          />
      </div>
  </div>
  <div className="row">
      <div className="col-md-12 mt-2 mb-4">
          <label></label>
          <select className="form-control">
              <option>Choose...</option>
              <option>Casual Leave(CL)</option>
              <option>Sick Leave (SL)</option>
              <option>Earned Leave (EL)</option>
              <option>Marriage Leave</option>
              <option>Maternity Leaves</option>
              <option>Paternity Leaves</option>
              <option>Half Pay Leave</option>
          </select>
      </div>
     
  </div>
  <div className="form-group">
      <button className="btn btn-primary" >
               Submit
      </button>
  </div>
</div>
</div> */}