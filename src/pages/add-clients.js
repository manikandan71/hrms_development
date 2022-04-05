import React from 'react';
import Button from '@mui/material/Button';

function AddClients() {
  return (
    <div className="page" style={{padding:"50px 5%"}}>
      <div style={{textAlign:'left'}}>
      <h4>Add Clients</h4>
      <p>HRMS / Clients / Add</p>
      </div>
      <div className='hrms-card'>
        <div class="row">
          <div class="col-lg-4 col-sm-6 col-12"><input type="text"  placeholder='First Name*' className='form-control'/></div>
          <div class="col-lg-4 col-sm-6 col-12"><input type="text"  placeholder='Last Name*' className='form-control'/></div>
          <div class="col-lg-4 col-sm-6 col-12"><input type="text"  placeholder='Email ID*' className='form-control'/></div>
          <div class="col-lg-4 col-sm-6 col-12"><input type="text"  placeholder='User Name*' className='form-control'/></div>
          <div class="col-lg-4 col-sm-6 col-12"><input type="text"  placeholder='Password' className='form-control'/></div>
          <div class="col-lg-4 col-sm-6 col-12"><input type="text"  placeholder='Confirm Password' className='form-control'/></div>
          <div class="col-lg-4 col-sm-6 col-12"><input type="text"  placeholder='Mobile No' className='form-control'/></div>
          <div class="col-lg-4 col-sm-6 col-12"><input type="text"  placeholder='Client ID*' className='form-control'/></div>
          <div class="col-lg-4 col-sm-6 col-12"><input type="text"  placeholder='Address' className='form-control'/></div>
        </div>
        <h5>Module Permission</h5>
        
            <table>
            
                   <tr>
                                                <th></th>
                                                <th>Read</th>
                                                <th>Write</th>
                                                <th>Delete</th>
                                            </tr>
                                
                                            <tr style={{borderTop:'2px solid #f68c1f'}}>
                                                <td>Projects</td>
                                                <td>  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" class="form-check-input"/>
                                                    
                                                </td>
                                                <td> <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" class="form-check-input"/>
                                                </td>
                                                <td> <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" class="form-check-input"/> </td>
                                            </tr>
                                            <tr>
                                                <td>Tasks</td>
                                                <td> <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" class="form-check-input"/></td>
                                                <td> <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" class="form-check-input"/></td>
                                                <td> <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" class="form-check-input"/></td>
                                            </tr>
                                            <tr>
                                                <td>Chat</td>
                                                <td> <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" class="form-check-input"/></td>
                                                <td> <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" class="form-check-input"/></td>
                                                <td> <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" class="form-check-input"/></td>
                                            </tr>
                                            <tr>
                                                <td>Estimates</td>
                                                <td> <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" class="form-check-input"/></td>
                                                <td> <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" class="form-check-input"/></td>
                                                <td> <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" class="form-check-input"/></td>
                                            </tr>
                                    
                                    </table>
                                    <Button variant="contained" href="#" style={{backgroundColor:'#f68c1f'}}>ADD </Button>


                    
      </div>
    </div>
  )
}

export default AddClients;