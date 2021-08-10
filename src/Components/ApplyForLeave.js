import React,{useState} from 'react';
import SideNavBar from './SideNavBar';
import './ApplyForLeave.css';
const ApplyForLeave = () =>{



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
                           <div className="row">
                               <div className="col-md-6 mt-2 mb-2">
                                   <label>Employee Name</label>
                                   <input type="text" className="form-control" />
                               </div>
                               <div className="col-md-6 mt-2 mb-2">
                               <label>Mobile No</label>
                                   <input type="text" className="form-control" />
                               </div>
                           </div>
                           <div className="row">
                               <div className="col-md-6 mt-2 mb-2">
                                   <label>Employee ID</label>
                                   <input type="text" className="form-control" />
                               </div>
                               <div className="col-md-6 mt-2 mb-2">
                               <label>Email-ID</label>
                                   <input type="text" className="form-control" />
                               </div>
                           </div>
                           <div className="row">
                               <div className="col-md-6 mt-2 mb-2">
                                   <label>From </label>
                                   <input type="date" className="form-control" />
                               </div>
                               <div className="col-md-6 mt-2 mb-2">
                               <label>To</label>
                                   <input type="date" className="form-control" />
                               </div>
                           </div>
                           <div className="row">
                               <div className="col-md-12 mt-2 mb-4">
                                   <label>Reason </label>
                                 <textarea className="form-control"> 

                                 </textarea>
                               </div>
                              
                           </div>
                           <div className="form-group">
                               <button className="btn btn-primary">
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