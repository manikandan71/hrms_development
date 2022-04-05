import React ,  {useState} from 'react';
import axios from 'axios';
import logo from "../Assets/Images/logo.png";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Personal from "../pages/signup-personal";
import Education from "../pages/educational-details";
import Experience from '../pages/experience-details';
import Skills from '../pages/employee-skills';
import Certification from '../pages/certification';

function SignUp() {


    // tabbar
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


    // for dummy api

    const [ firstname, setFirstname] = useState("")
    const [ lastname, setLastname] = useState("")
    const [ address, setAddress] = useState("")
    const [ email, setEmail] = useState("")
    const [ mobile, setMobile] = useState("")
    const [ password, setPassword] = useState("")
    const [ gender, setGender] = useState("")
    const [ image, setImage] = useState("")
    const [ coverImage, setCoverImage] = useState("")
    const [ landmark, setLandmark] = useState("")
    const [ city, setCity] = useState("")
    const [ state, setState] = useState("")
    const [ country, setCountry] = useState("")
    const [ pincode, setPincode] = useState("")
    const [ stdCode, setStdCode] = useState("")
    const [ landlineNum, setLandlineNum] = useState("")
    const [ userRoleId, setUserRoleId] = useState("")
    const [ portalId, setPortalId] = useState("")


    function signup () {
        let item = { firstname, lastname, address, email, mobile, password, gender, image, coverImage,
            landmark, city, state, country, pincode, stdCode, landlineNum, userRoleId, portalId,}
      console.log(item);
  
    let result =  axios.post(`http://52.172.232.107:8080/api-services/register`, item )
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
       
    }
  return (<div className='page'  style={{padding:"50px 5%"}}>
      <div className='hrms-card'    >
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" >
            <Tab label="Personal" value="1" style={{textTransform:'none'}}/>
            <Tab label="Educational Details" value="2" style={{textTransform:'none'}}/>
            <Tab label="Experience Details" value="3" style={{textTransform:'none'}}/>
            <Tab label="Employee Skills" value="4" style={{textTransform:'none'}}/>
            <Tab label="Certication" value="5" style={{textTransform:'none'}}/>
          </TabList>
        </Box>
        <TabPanel value="1" >
          <Personal/>
            
        </TabPanel>
        <TabPanel value="2"><Education/></TabPanel>
        <TabPanel value="3"><Experience/></TabPanel>
        <TabPanel value="4"><Skills/></TabPanel>
        <TabPanel value="5"><Certification/></TabPanel>
      </TabContext>
    </Box>
      </div>
 


 {/* <div className="signup-form" style={{backgroundColor:'#fff',padding:'10px'}}>
      <div style={{textAlign:'center'}}><img src={logo} alt=""/></div>
       
       <h2 style={{marginTop:"20px",color:'#3c8dbc',textAlign:'center'}}>SIGN UP</h2>
       <div class="row">
            <div class="col-md-6 col-sm-12 col-12">
                <p>First Name*</p>
            <input type="text" class="form-control" placeholder="First name" value={firstname} 
            onChange={(e) => setFirstname(e.target.value)}/>
            </div>
            <div class="col-md-6 col-sm-12 col-12">
                <p>Last Name*</p>
            <input type="text" class="form-control" placeholder="Last name"
            value={lastname} onChange={(e) => setLastname(e.target.value)}/>
            </div>
        </div>
        <div class="row">            
            <div class="col-md-6 col-sm-12 col-12">
            <p>Email Id*</p>
            <input type="text" class="form-control" placeholder="email"
            value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div class="col-md-6 col-sm-12 col-12">
            <p>Phone number*</p>
            <input type="text" class="form-control" placeholder="mobile"
            value={mobile} onChange={(e) => setMobile(e.target.value)}/>
            </div>

            </div>
        <div class="row">
        <div class="col-md-6 col-sm-12 col-12">
            <p>Gender</p>
                <select class="form-control" aria-label="Default select example"  
                value={gender}
                onChange={(e) => { const selectedGender = e.target.value;
                setGender(selectedGender);
                }}>
                <option selected style={{color:"#495057"}}>--Choose Gender--</option>
                <option value="1">Male</option>
                <option value="2">Female</option>                
                </select>
           
                
            </div>
            <div class="col-md-6 col-sm-12 col-12">
            <p>Password*</p>
            <input type="text" class="form-control" placeholder="password"
            value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            
            
        </div>
        <div class="row">
        <div class="col-md-6 col-sm-12 col-12">
            <p>Address</p>
            <input type="text" class="form-control" placeholder="address"
            value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>
        <div class="col-md-6 col-sm-12 col-12">
            <p>City</p>
            <input type="text" class="form-control" placeholder="city"
            value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
           
        </div>
        <div class="row">            
            <div class="col-md-4 col-sm-12 col-12">
            <p>State</p>
            <input type="text" class="form-control" placeholder="state"
            value={state} onChange={(e) => setState(e.target.value)} />
            </div>
            <div class="col-md-4 col-sm-12 col-12">
            <p>Country</p>
            <input type="text" class="form-control" placeholder="country"
            value={country} onChange={(e) => setCountry(e.target.value)} />
            </div>
            <div class="col-md-4 col-sm-12 col-12">
            <p>Pincode</p>
            <input type="text" class="form-control" placeholder="pincode"
            value={pincode} onChange={(e) => setPincode(e.target.value)} />
            </div>
        </div>
       
        <button  class="btn btn-primary btn-block btn-flat" onClick={signup} style={{marginTop:'20px'}}>SIGN UP</button>      
                      

 
   </div> */}




  </div>
  )
}

export default SignUp;
