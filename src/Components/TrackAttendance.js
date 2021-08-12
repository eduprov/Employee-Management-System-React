import axios from 'axios';
import React,{useState, useEffect} from 'react';
import SideNavBar from './SideNavBar';
import {Link} from 'react-router-dom'

const TrackAttendance = () =>{

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

    return(
        <>
         <SideNavBar/>
     <div className="container">
        <div className="row">
            <div className="col-md-12 mt-5">
                <table className="table table-sm table-bordered text-center">
                  <thead>
                      <tr>
                          <th>Full Name</th>
                          <th>Mobile No </th>
                          <th>Email-ID</th>
                          <th>Login</th>
                          <th>View</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          employee.map((xemployee, index)=>{
                              return(
                                  <tr key={index}>
                                     <td>{xemployee.name}</td>
                                     <td>{xemployee.mobile}</td>
                                     <td>{xemployee.email}</td>
                                     <td>{xemployee.logintime}</td>
                                     <td><Link style={{textDecoration:'none'}} to={`/${xemployee.employee}/editcustomer`} 
                                    className="text-success">
                                    <i class="fas fa-eye"></i>
                                    </Link>
                                    </td> 
                                  </tr>
                              )
                          })
                      }
                  </tbody>
                </table>
            </div>
        </div>
     </div>
     </>
    )
}
export default TrackAttendance;


// {
//     employee.map((xemployee, index)=>{
//         return(
//             <tr key={index}>
//                 <td>{xemployee.name}</td>
//             </tr>
//         )
//     })
// }