import React , {useState}from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';


const columns = [
    { id: 'name', label: 'Type', minWidth: 10 },
    { id: 'code', label: 'Degree', minWidth: 10 },
    {
      id: 'population',
      label: 'Specialization',
      minWidth: 10,
      align: 'right',
    //   format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Universit',
      minWidth: 10,
      align: 'right',
    //   format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'density',
      label: 'Institution',
      minWidth: 10,
      align: 'right',
    //   format: (value) => value.toFixed(2),
    },
    {
        id: 'yearcompleted',
        label: 'Year Completed',
        minWidth: 10,
        align: 'right',
        // format: (value) => value.toLocaleString('en-US'),
      },
      {
        id: 'cgpa',
        label: 'CGPA',
        minWidth: 10,
        align: 'right',
        // format: (value) => value.toFixed(2),
      },
      {
        id: 'action',
        label: 'Action',
        minWidth: 10,
        align: 'right',
        // format: (value) => value.toFixed(2),
      },
  ];
  
  function createData(name, code, population, size, density, yearcompleted, cgpa, action) {
    // const density = population / size;
    return { name, code, population, size, density, yearcompleted, cgpa, action};
  }
  
  const rows = 
  [
    createData('India', 'IN', 241,71,354, 328,7263,"complete"),
    createData('China', 'CN', 1403,500,365, 959,6961,"pending"),
    createData('Italy', 'IT', 60,483,973, 301,340,"complete"),
    createData('United States', 'US', 327,167,434, 983,3520,"pending"),
    createData('Canada', 'CA', 376,21,3, 9984,670,"complete"),
    createData('Australia', 'AU', 25,475,400, 7692,24,"complete"),
    createData('Germany', 'DE', 830,19,200, 357,578,"pending"),
    createData('Ireland', 'IE', 485,70,200, 70,273,"pending"),
    createData('Mexico', 'MX', 126,577,691, 197,2550,"complete"),
    createData('Japan', 'JP', 1263,17,400, 377,973,"pending"),
    createData('France', 'FR', 6702,2000, 64,46,79,"pending"),
    createData('United Kingdom', 'GB', 675,457,57, 242,495,"complete"),
    createData('Russia', 'RU', 146,793,744, 1709,8246,"complete"),
    createData('Nigeria', 'NG', 200,962,417, 923,768,"pending"),
    createData('Brazil', 'BR', 2101,471,25, 8515,767,"complete"),
  ];

function Education() {

        const [ type, setType] = useState("")
        const [ specialization, setSpecialization] = useState("")
        const [ degree, setDegree] = useState("")
        const [ university, setUniversity] = useState("")
        const [ year, setYear] = useState("")
        const [ cgpa, setCgpa] = useState("")
        const [ institute, setInstitute] = useState("")
        const [uploadFile, setUploadFile] = React.useState();

  // dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // table
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (<>
    <div className='education' stle={{paddinBottom:'20px'}}>
      <div class="row" style={{padding:'10px'}}>
        <div class="col-lg-10 col-12" ><h5>My Educational Details</h5></div>
        <div class="col-lg-2 col-12">
        <button type="button" className="excel" style={{backgroundColor:"#3c8dbc",color:'#fff',padding:'5px 10px'}} onClick={handleClickOpen}>ADD</button>
        </div>
      </div>        
        <Divider />
        <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          {/* <TableHead> */}
            {/* <TableRow>
              <TableCell align="center" colSpan={2}>
                Country
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
            </TableRow> */}
            <TableRow>
                
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth,backgroundColor:'#ededed' , border: "1px solid #f4f4f4" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          {/* </TableHead> */}
          <TableBody>
          <p style={{margin:'20px'}}>no data available</p>
            {/* {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })} */}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        // onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    <Dialog open={open} onClose={handleClose} >
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
                // value={type}
                // onChange={(e) => { const selectedType = e.target.value;
                // setType(selectedType); }}
                >
                <option selected style={{color:"#495057"}}>--select Type--</option>
                <option value="1">Degree</option>
                         
                </select>
          
            </div>
            <div class="col-md-6 col-sm-12 col-12">
                <p>Specialization</p>
            <input type="text" class="form-control" placeholder="Last name"
            // value={specialization} onChange={(e) => setSpecialization(e.target.value)}
            />
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-sm-12 col-12">
                <p>Degree</p>
         
                <select class="form-control" aria-label="Default select example"  
                //  value={degree}
                //  onChange={(e) => { const selectedDegree = e.target.value;
                //  setDegree(selectedDegree); }}
                >
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
            // value={university} onChange={(e) => setUniversity(e.target.value)}
           
            />
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-sm-12 col-12">
                <p>Year Completed</p>
         
                <select class="form-control" aria-label="Default select example"  
                  // value={year}
                  // onChange={(e) => { const selectedYear = e.target.value;
                  // setYear(selectedYear); }}
                  >
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
            // value={institute} onChange={(e) => setInstitute(e.target.value)}
           
             />
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-sm-12 col-12">
                <p>CGPA</p>
                <input type="text" class="form-control" placeholder="enter percentage scored"
                // value={cgpa} onChange={(e) => setCgpa(e.target.value)}
           
             />
              
           
            </div>
            <div class="col-md-6 col-sm-12 col-12">
              <p>Other Document</p>
            <input type="file" style={{width: "90%"}}
             onChange={(e) => setUploadFile(e.target.files)} />
       
            </div>
        </div>
        </DialogContent>
        <DialogActions>
        <Button variant="outlined" onClick={handleClose} style={{backgroundColor: "#f4f4f4",color: "#444", borderColor: "#ddd"}}>Cancel</Button>
          <Button onClick={handleClose} style={{backgroundColor:"#3c8dbc",color:'#fff'}}>Save</Button>
        </DialogActions>
    </Dialog>

    </div>
  </>
  )
}

export default Education