import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ProjectsList from "./projectslist";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 


function MyProjects() {

// date picker
const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());
    // dialog
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  return (
    <div className="page" style={{padding:"50px 5%"}}>
    <div style={{textAlign:'left'}}>
    <h4>Projects List</h4>
    <p>HRMS / Projects/ Projects List</p>
    </div>
  <div className='hrms-card'>
    <div class="row" style={{paddingBottom:'10px'}}>
      <div class="col-lg-9 col-12"><h5>Manage Project</h5></div>
      <div class="col-lg-3 col-12">
      {/* <button type="button" className="excel" style={{backgroundColor:"#3c8dbc",color:'#fff',padding:'5px 10px'}} 
      onClick={handleClickOpen}
      >ADD Project</button> */}
      <Button variant="outlined" style={{backgroundColor:"#3c8dbc",color:'#fff',padding:'5px 10px'}}  onClick={handleClickOpen}>
      ADD Project
</Button>
    </div>
    </div>
    <ProjectsList/>

   </div>
   <Dialog open={open} onClose={handleClose} >
    <div  class="row">
        <div class="col-10"><DialogTitle >Create Project</DialogTitle></div>
        <div class="col-2"><CloseIcon style={{marginTop:"20px",cursor:'pointer'}} onClick={handleClose}/></div>        
      </div>
        <Divider/>
        <DialogContent >
      
        <div class="row">
           
            <div class="col-md-6 col-sm-12 col-12">
                <p>Project Name</p>
            <input type="text" class="form-control" placeholder="Enter Project name"
            // value={specialization} onChange={(e) => setSpecialization(e.target.value)}
            />
            </div>

            <div class="col-md-6 col-sm-12 col-12">
                <p>Project Description</p>
                <textarea rows="2" class="form-control" placeholder="Enter Project description"></textarea>
            {/* <input type="text" class="form-control" placeholder="Enter Project description" rows="3" 
            // value={specialization} onChange={(e) => setSpecialization(e.target.value)}
            /> */}
            </div>
        </div>
        <div class="row">
        <div class="col-md-6 col-sm-12 col-12">
                <p>Location</p>
            <input type="text" class="form-control" placeholder="Enter Location"
            // value={university} onChange={(e) => setUniversity(e.target.value)}
           
            />
            </div>
            
            <div class="col-md-6 col-sm-12 col-12">
                <p>Project Type</p>
         
                <select class="form-control" aria-label="Default select example"  
                //  value={degree}
                //  onChange={(e) => { const selectedDegree = e.target.value;
                //  setDegree(selectedDegree); }}
                >
                <option selected style={{color:"#495057"}}>project type</option>
                <option value="1">Billable</option>
                <option value="2">Non Billable</option>        
                </select>
            
            </div>
            
        </div>
        <div class="row">            
            <div class="col-md-6 col-sm-12 col-12">
                <p>Client Name</p>
            <input type="text" class="form-control" placeholder="Enter Client name"
            // value={institute} onChange={(e) => setInstitute(e.target.value)}           
             />
            </div>
            <div class="col-md-6 col-sm-12 col-12">
                <p>Start Date</p>
                <DatePicker className='form-control' selected={startDate} onChange={(date) => setStartDate(date)} />           
            </div>
        </div>
        <div class="row">            
            <div class="col-md-6 col-sm-12 col-12">
                <p>Planned hours</p>
            <input type="text" class="form-control" placeholder="Enter Client name"
            // value={institute} onChange={(e) => setInstitute(e.target.value)}           
             />
            </div>
            <div class="col-md-6 col-sm-12 col-12">
                <p>End Date Date</p>
                <DatePicker className='form-control' selected={endDate} onChange={(date) => setEndDate(date)} />           
            </div>
        </div>
        
        </DialogContent>
        <DialogActions>
        <Button variant="outlined" onClick={handleClose} style={{backgroundColor: "#f4f4f4",color: "#444", borderColor: "#ddd"}}>Cancel</Button>
          <Button onClick={handleClose} style={{backgroundColor:"#3c8dbc",color:'#fff'}}>Save</Button>
        </DialogActions>
    </Dialog>
  </div>
  )
}

export default MyProjects;
