import React, { Component } from 'react';
import './Login.css'
import axios from 'axios';
class Login extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            message:'',
        }
    }

    processEmail = (obj) =>{
     this.setState({
         email:obj.target.value
     })
    }

    processPassword = (obj) =>{
        this.setState({
            password:obj.target.value
        })
    }

    login = () =>{
        var url = "https://eduprov.loca.lt/login";
        var input ={
            "email" : this.state.email,
            "password": this.state.password,
        };
        axios.post(url, input)
        .then(response =>{
            if(response.data.id==""){
                this.setState({
                    message:"Enter valid email and password"
                })
            }  else{
                this.setState({
                    message:"Logged in Succssfully"
                })
                localStorage.setItem("name", response.data[0].name);
                localStorage.setItem("email", response.data[0].email);
                localStorage.setItem("id", response.data[0].id);
                
            }
            window.location.href="http://localhost:3000/"
        })
    }

    render(){
        return(
            <div className="container mt-4">
                <div className="row">
                   <div classsName="col-md-12 ">
                       <h4 className="text-success">Employee Management System</h4>
                   </div>

                   <div className="col-md-4"></div>
                   <div className="col-md-4 mt-4">
                       <div className="card mt-5 login-card">
                           <div className="card-body">
                               <h5>Employee Login</h5>
                               <span className="progress-bar"></span>
                               <p className="text-success">{this.state.message}</p>
                             <div className="form-group mb-3">
                                 <label>Email-ID</label>
                                 <input type="text" 
                                 className="form-control" 
                                 onChange={this.processEmail}/>
                             </div>
                             <div className="form-group mb-3">
                                 <label>Password</label>
                                 <input type="text" 
                                 className="form-control" 
                                 onChange={this.processPassword}/>
                             </div>

                             <div className="form-group">
                                 <button className="btn btn-success" onClick={this.login}>
                                     Login <i class="fas fa-arrow-circle-right"></i>
                                 </button>
                             </div> 
                           </div>
                       </div>
                   </div>
                   <div className="col-md-4"></div>
                </div>
            </div>
        )
    }


}
export default Login