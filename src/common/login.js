import React, {useState} from 'react'
import './styles.css';
import axios from "axios";
import logo from "../Assets/Images/logo.png";
import Button from '@mui/material/Button';


function Login() {
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
  
  
    function login() {
      let values = {mobile, password}
      console.log(values);
        axios.post(`http://52.172.232.107:8080/api-services/login`,  values )
        .then(res => {
          console.log(res);
          
          console.log(res.data);
          // console.log(res.data.responseData.userDetail.accessToken);
         
          
          if(res.data.responseCode === "1"){
            localStorage.setItem("token",res.data.responseData.userDetail.accessToken);
          
            window.location.href = "/my-projects";
  
          }
          else {
          console.log("error");
          alert("invalid values");
        }
        })
  
    }

  return (
  <div className='login' >
  
    
   <div className="login-form">
     <div style={{textAlign:'center',marginBottom:'20px'}}><img src={logo} alt=""/></div>
       
         
                    <input type="text" placeholder='Employee Id' className='form-control' name="mobile"
                    value={mobile} onChange={(e) => setMobile(e.target.value)}/>
             
             
                    <input type="password" placeholder='Password' className='form-control' name="password"
    value={password} onChange={(e) => setPassword(e.target.value)}/>

    
                    <div className="forgot">
                        <a href="forgot-password.html" style={{color:"#3c8dbc"}}>forgot password?</a>
                    </div>              
                    <Button variant="contained" onClick={login}  style={{backgroundColor:'#3c8dbc',marginTop:'10px',width:'100%'}}>Login</Button>
    </div> 
 </div>
  )
}

export default Login;