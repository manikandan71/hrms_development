import React from 'react';
import person from "../Assets/Images/person.png";

function Personal() {
  return (
    <>
        <div class="container">
              <div class="row" style={{padding:'20px '}}>
                  <div class="col-md-12 col-lg-6" >
                    <div className='personal-form'>
                    <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label" style={{textAlign:'left'}}>Employee Photo</label>
    <div class="col-sm-9" style={{textAlign:"left"}}>
    <img src={person} alt="" style={{width:"100px",height:'100px'}}/><br/><br/>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
      {/* <input type="password" class="form-control" id="inputPassword" placeholder="Password"/> */}
    </div>
  </div><br/>
  
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Employee ID<span style={{color:"red"}}>*</span></label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">First Name<span style={{color:"red"}}>*</span></label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Last Name<span style={{color:"red"}}>*</span></label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Location<span style={{color:"red"}}>*</span></label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Gender<span style={{color:"red"}}>*</span></label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Date of Birth<span style={{color:"red"}}>*</span></label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Date of Joining<span style={{color:"red"}}>*</span></label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Phone<span style={{color:"red"}}>*</span></label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Company</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Email<span style={{color:"red"}}>*</span></label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Department<span style={{color:"red"}}>*</span></label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Designation<span style={{color:"red"}}>*</span></label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Manager<span style={{color:"red"}}>*</span></label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Role<span style={{color:"red"}}>*</span></label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  
                    
                    </div>
                    </div>   
                  <div class="col-md-12 col-lg-6" >
                  <div className='personal-form'>
                   
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Blood Group</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Nationality<span style={{color:"red"}}>*</span></label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Marital_status</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Religion</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Date of Anniversary</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Emergency Contact Number<span style={{color:"red"}}>*</span></label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Emerg Cont. Person Relation</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Father Name</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Mother Name</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Pan No.</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Aadhar No.</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Passport No.</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">PF No.</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
  </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Bio Metric Id<span style={{color:"red"}}>*</span></label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
    </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Status<span style={{color:"red"}}>*</span></label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
    </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Employment Type<span style={{color:"red"}}>*</span></label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
    </div>   
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Billable Status<span style={{color:"red"}}>*</span></label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" /> 
    </div>   
  </div>
  
                    
                    </div>
                      
                 </div>   
                </div>
            <div class="row" style={{padding:'20px'}}>
                <div class="col" style={{textAlign:'right'}}>
                <button type="button" className="excel" style={{padding:'5px 10px'}}>Cancel</button>
                <button type="button" className="excel" style={{backgroundColor:"#3c8dbc",color:'#fff',padding:'5px 10px'}}>Save</button>
                </div>
            </div>
          </div>
    </>
  )
}

export default Personal;