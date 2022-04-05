import React, {useState} from 'react';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';




function EducationForm(props) {


        const [ type, setType] = useState("")
        const [ specialization, setSpecialization] = useState("")
        const [ degree, setDegree] = useState("")
        const [ university, setUniversity] = useState("")
        const [ year, setYear] = useState("")
        const [ cgpa, setCgpa] = useState("")
        const [ institute, setInstitute] = useState("")
        const [uploadFile, setUploadFile] = React.useState();
        
        // console.log(type);
          const transferValue = (event) => {
            event.preventDefault();
            const val = {
            type, specialization, degree, university, year, cgpa,institute, uploadFile
            
            };console.log(val);
            props.func(val);
            // clearState();
          };
         
          const clearState = () => {
            setType('');
            setSpecialization('');
            setDegree('');
            setUniversity ('');
            setYear('');
            setCgpa('');
            setInstitute('');
            setUploadFile('');
          };
// dialog
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};




  return (
   <>
    
      <div  class="row">
        <div class="col-10"><DialogTitle >Add Educational Details</DialogTitle></div>
        <div class="col-2"><CloseIcon style={{marginTop:"20px",cursor:'pointer'}} onClick={handleClose}/></div>        
      </div>
        <Divider/>
        <DialogContent >
      
        <div class="row">
            <div class="col-md-6 col-sm-12 col-12">
                <p>Type</p>
         
                <select class="form-control" aria-label="Default select example"  
                value={type}
                onChange={(e) => { const selectedType = e.target.value;
                setType(selectedType); }}
                >
                <option selected style={{color:"#495057"}}>--select Type--</option>
                <option value="1">Degree</option>
                         
                </select>
          
            </div>
            <div class="col-md-6 col-sm-12 col-12">
                <p>Specialization</p>
            <input type="text" class="form-control" placeholder="Last name"
            value={specialization} onChange={(e) => setSpecialization(e.target.value)}
            />
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-sm-12 col-12">
                <p>Degree</p>
         
                <select class="form-control" aria-label="Default select example"  
                 value={degree}
                 onChange={(e) => { const selectedDegree = e.target.value;
                 setDegree(selectedDegree); }}>
                <option selected style={{color:"#495057"}}>--select Degree--</option>
                <option value="1">B.E</option>
                <option value="2">MCA</option>
                <option value="3">MBA</option>
                <option value="4">B.TECH</option>
                <option value="5">M.TECH</option>
                <option value="6">BSC</option>
                <option value="7">BCA</option>
                <option value="8">DEPLOMA</option>
                <option value="9">MSC</option>
                <option value="10">PGDM</option>
                <option value="11">BBM</option>
                <option value="12">B.COM</option>
                <option value="13">PGDHRM</option>
                <option value="14">BSC</option>         
                </select>
            
            </div>
            <div class="col-md-6 col-sm-12 col-12">
                <p>University</p>
            <input type="text" class="form-control" placeholder="Last name"
            value={university} onChange={(e) => setUniversity(e.target.value)}
           
            />
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-sm-12 col-12">
                <p>Year Completed</p>
         
                <select class="form-control" aria-label="Default select example"  
                  value={year}
                  onChange={(e) => { const selectedYear = e.target.value;
                  setYear(selectedYear); }}>
                <option selected style={{color:"#495057"}}>2022</option>
                <option value="1">2022</option>
                <option value="2">2021</option>
                <option value="3">2020</option>
                <option value="4">2019</option>
                <option value="5">2018</option>        
                </select>
           
            </div>
            <div class="col-md-6 col-sm-12 col-12">
                <p>Institute</p>
            <input type="text" class="form-control" placeholder="Last name"
            value={institute} onChange={(e) => setInstitute(e.target.value)}
           
             />
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-sm-12 col-12">
                <p>CGPA</p>
                <input type="text" class="form-control" placeholder="enter percentage scored"
                value={cgpa} onChange={(e) => setCgpa(e.target.value)}
           
             />
              
           
            </div>
            <div class="col-md-6 col-sm-12 col-12">
              <p>Upload file</p>
            <input type="file" onChange={(e) => setUploadFile(e.target.files)} />
       
            </div>
        </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={transferValue}>Save</Button>
        </DialogActions>
   </>
  )
}

export default EducationForm;