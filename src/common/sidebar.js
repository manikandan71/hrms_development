import React, { Component, useState, useEffect } from "react";
import Accordion from '@mui/material/Accordion';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import {FaAlignCenter, FaAlignJustify} from "react-icons/fa";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Container, makeStyles, Typography } from "@material-ui/core";
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import { CDropdownToggle, CDropdownItem, CDropdownMenu, CDropdown} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PowerSettingsNewSharpIcon from '@mui/icons-material/PowerSettingsNewSharp';
import admin from "../Assets/Images/admin.png";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import {NavLink} from 'react-router-dom'
import { useLocation } from 'react-router-dom';


// dropdown
const useStyles = makeStyles((theme) => ({
    container: {
        height: "100%" ,
        color: "white",
        // fontFamily:"Roboto",
        // marginTop: theme.spacing(2),
        backgroundColor: "#f8f9fa",
        // position: "sticky",
        [theme.breakpoints.up("sm")]: {
          backgroundColor: "#f8f9fa",
          color: "#000",
        },
      },
      item: {
        display: "flex",
        textAlign:"left",
     
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
          marginBottom: theme.spacing(3),
          cursor: "pointer",
        },
      },
      item1: {
        textAlign:"left",
        border:"none",
        // width:"100%",
        padding:0,
        webkitBoxShadow: 'none',
        mozBoxShadow: 'none',
        boxShadow:"none",
        backgroundColor:"#f8f9fa",
        marginBottom: theme.spacing(0),
        [theme.breakpoints.up("sm")]: {
          marginBottom: theme.spacing(0),
          cursor: "pointer",
        },
        
      },
      
      submenu: {
        //   backgroundColor:"#fff",
          color:'#000',
      },
      closemenu: {
        width:'2.7vw',
        height:'4vh',
        color:'#FFFFFF',
        marginLeft:'-20px',
        marginTop:'5px',
        cursor: 'pointer',
        justifyContent:"center",
        alignItems:"center",
      },
      text: {
        //   padding:"10px 0",
        textDecoration:"none",
        fontSize:"1rem",
        color:"#000",
        display:"flex",
        textAlign:"left",
        // font: 'normal normal normal 16px/19px Roboto',
        [theme.breakpoints.down("sm")]: {
        //   display: "none",
        },
      },
    }));

function Sidebar() {
    const { pathname } = useLocation();

    // tabbar 
    const [value, setValue] = React.useState('1');

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

//   dropdown
  const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [menuCollapse, setMenuCollapse] = useState(false)

    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

  return (
   <div className="left-sidebar" stle={{width:'250px'}}>
       <div className="user-details">
            <div style={{display:"flex"}}>
		        <img src={admin} alt="" style={{height:"50px",width:'50px',borderRadius:'10px'}}/>
                <div style={{margin:"auto 20px"}}>
                <p style={{marginBottom:"0px",color:'#000'}}>welcome,</p>
                <CDropdown >
                <CDropdownToggle  style={{backgroundColor:'inherit',border:"0px",color:'#000',boxShadow:'none'}}>User Name</CDropdownToggle>
                <CDropdownMenu >
                    <CDropdownItem href="#">  <PersonIcon style={{height:'20px'}}/> My Profile</CDropdownItem>
                    <CDropdownItem href="#">  <MailIcon style={{height:'20px'}}/> Messages</CDropdownItem>
                    <CDropdownItem href="#">  <SettingsOutlinedIcon style={{height:'20px'}}/> Settings</CDropdownItem>
                    <CDropdownItem href="#">  <PowerSettingsNewSharpIcon style={{height:'20px'}}/> Logout </CDropdownItem>
                </CDropdownMenu>
                </CDropdown>	 
            </div> 
		</div>
            
		<div style={{height:'1px',width:"90%",backgroundColor:'#e9ecef',marginTop:'20px'}} />
		    <div style={{display:'flex',paddingTop:'20px',color:'#000'}}>
			<p ><b>5+</b><br/><span style={{fontSize:'12px',color:'#8c9db5',marginRight:'15px'}}>Experience</span></p>
			<p><b>400+</b><br/><span style={{fontSize:'12px',color:'#8c9db5',marginRight:'15px'}}>Employees</span></p>
			<p><b>80+</b><br/><span style={{fontSize:'12px',color:'#8c9db5',marginRight:'15px'}}>Clients</span></p>
		    </div>
        </div>
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
            <Tab label="HR" value="1" />
            <Tab label="Projects" value="2" />
            <Tab label=<DashboardIcon/> value="3" />
            <Tab label=<SettingsIcon/> value="4" />
          </TabList>
        </Box>
        <TabPanel value="1" ><br/>
            <div style={{width:'250px'}}>
            <Container collapsed={menuCollapse} className={classes.container} >
            {/* <div className={classes.item} style={{marginBottom:"-0px",marginLeft:'1px',width:'250px'}}>
                <Typography className={classes.text}>Dashboards</Typography>
            </div> */}
            <Accordion style={{boxShadow:'none',position:'initial',width:"250px"}} className={classes.item1} expanded={expanded === 'panel1'}  onChange={handleChange('panel1')}>
                <AccordionSummary component={NavLink} to="/my-projects" 
                expandIcon={<ExpandMoreIcon style={{color:""}} />}
                >
                    <Typography className={classes.text} 
                    
                //   isActive={() => ['/my-projects', '/timesheet'].includes(pathname)}
                    // /my-projects
                  
                      >Project & Time</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.submenu} >
                    <div className={classes.item} >
                        <Typography className={classes.text} component={NavLink} 
            to="/my-projects" 
            // exact activeClassName="active"
            
            >My projects</Typography>
                    </div>
                    <div className={classes.item}>
                        <Typography className={classes.text}
                        component={NavLink} 
                        to="/timesheet" >Timesheet</Typography>
                    </div>
                    <div className={classes.item}>
                        <Typography className={classes.text} component={NavLink} to="/quicksight-reports">Quicksight Reports</Typography>
                    </div>
                    <div className={classes.item}>
                        <Typography className={classes.text} component={NavLink} to="/manage-projects">Manage Projects</Typography>
                    </div>
                    <div className={classes.item}>
                        <Typography className={classes.text} component={NavLink} to="/Approve-timesheet">Approve Timesheet</Typography>
                    </div>
                    <div className={classes.item}>
                        <Typography className={classes.text} component={NavLink} to="/project-configuration-report">Project Configuration Report</Typography>
                    </div>
                    <div className={classes.item}>
                        <Typography className={classes.text} component={NavLink} to="/project-consolidated-reports">Project Consolidated Reports</Typography>
                    </div>

                </AccordionDetails>
            </Accordion>
   
            <Accordion style={{boxShadow:'none',position:'initial',width:"250px"}} className={classes.item1} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{}} />}
                >
                    <Typography className={classes.text} component={NavLink} to="/leave&attendence">Leave & Attendence</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.submenu}>
                <div className={classes.item}>
                    <Typography className={classes.text} component={NavLink} to="/leave-dashboard"> Leave Dashboard</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text} component={NavLink} to="/onShore-leave-dashboard">OnShore Leave Dashboard</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text} component={NavLink} to="/apply-leave">Apply Leave</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text} component={NavLink} to="/approve-leave">Approve Leave</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text} component={NavLink} to="/apply-wfh"> Apply WFH</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text} component={NavLink} to="/approve-wfh">Approve WFH</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text} component={NavLink} to="/attendencr-dashboard">Attendence Dashboard</Typography>
                    </div>
                    
                   
                </AccordionDetails>
            </Accordion>
            <Accordion style={{boxShadow:'none',position:'initial',width:"250px"}} className={classes.item1} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{}} />}
                >
                    <Typography className={classes.text} >HR & Finance</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.submenu}>
                <div className={classes.item}>
                    <Typography className={classes.text}> View Payslip</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text}>View Form16</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text}>TDS Declaration</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text}>View Hike Letter</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text}> Upload Files</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text}>Performance Appraisal</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text}>Configure Appraisal</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text}>Goal Setting</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text}>My Goal</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text}>Approve Goal</Typography>
                    </div>
                    
                   
                </AccordionDetails>
            </Accordion>


            <Accordion style={{boxShadow:'none',position:'initial',width:"250px"}} className={classes.item1} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:""}} />}
                >
                    <Typography className={classes.text}>Assets</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.submenu}>
                    <div className={classes.item}>
                        <Typography className={classes.text} component={NavLink} to="/assets-entry">Assets Entry</Typography>
                    </div>
                    <div className={classes.item}>
                        <Typography className={classes.text} component={NavLink} to="/assets-mapping">Assets Mapping</Typography>
                    </div>
                   
                    

                </AccordionDetails>
            </Accordion>
   
            <Accordion style={{boxShadow:'none',position:'initial',width:"250px"}} className={classes.item1} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{}} />}
                >
                    <Typography className={classes.text} >Admin</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.submenu}>
                <div className={classes.item} >
                    <Typography className={classes.text} component={NavLink} to="/employee">Employee</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text}>Leave Details</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text}>Leave Reversal</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text}>Leave Balance Report</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text}>Work From Home Sum. Report</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text}>Manage Role Access</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text}>Attendence Report</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text}>TDS Report</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text}>Export Timesheet</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text}>Manage Master</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text}>Home Master</Typography>
                    </div>
                   
                    
                   
                </AccordionDetails>
            </Accordion>
            <Accordion style={{boxShadow:'none',position:'initial',width:"250px"}} className={classes.item1} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{}} />}
                >
                    <Typography className={classes.text} >Help</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.submenu}>
                <div className={classes.item}>
                    <Typography className={classes.text}> User Guide</Typography>
                    </div>
                    <div className={classes.item}>
                    <Typography className={classes.text}>Change Password</Typography>
                    </div>
                    
                   
                   
                </AccordionDetails>
            </Accordion>
            
                              
        </Container>
            </div>
                
        

        </TabPanel>
        <TabPanel value="2">

        <div style={{width:'250px'}}>
            <Container collapsed={menuCollapse} className={classes.container} >
            {/* <div className={classes.item} style={{marginBottom:"-0px",marginLeft:'1px',width:'250px'}}>
                <Typography className={classes.text}>Dashboards</Typography>
            </div> */}
            <Accordion style={{boxShadow:'none',position:'initial',width:"250px"}} className={classes.item1} expanded={expanded === 'panel1'}  onChange={handleChange('panel1')}>
                <AccordionSummary 
                expandIcon={<ExpandMoreIcon style={{color:""}} />}
                >
                    <Typography className={classes.text} 
                   
                    // "/timesheet","/quicksight-reports","/manage-projects","/Approve-timesheet","/project-configuration-report","/project-consolidated-reports"} 
                    style={{}}>Project & Time</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.submenu} >
                    <div className={classes.item} >
                        <Typography className={classes.text} component={NavLink} to="/my-projects">My projects</Typography>            
                    </div>
                    <div className={classes.item}>
                        <Typography className={classes.text}
                        component={NavLink} 
                        to="/timesheet" >Timesheet</Typography>
                    </div>
                    <div className={classes.item}>
                        <Typography className={classes.text} component={NavLink} to="/quicksight-reports">Quicksight Reports</Typography>
                    </div>
                    <div className={classes.item}>
                        <Typography className={classes.text} component={NavLink} to="/manage-projects">Manage Projects</Typography>
                    </div>
                    <div className={classes.item}>
                        <Typography className={classes.text} component={NavLink} to="/Approve-timesheet">Approve Timesheet</Typography>
                    </div>
                    <div className={classes.item}>
                        <Typography className={classes.text} component={NavLink} to="/project-configuration-report">Project Configuration Report</Typography>
                    </div>
                    <div className={classes.item}>
                        <Typography className={classes.text} component={NavLink} to="/project-consolidated-reports">Project Consolidated Reports</Typography>
                    </div>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{boxShadow:'none',position:'initial',width:"250px"}} className={classes.item1} expanded={expanded === 'panel7'}  onChange={handleChange('panel7')}>
                <AccordionSummary 
                expandIcon={<ExpandMoreIcon style={{color:""}} />}
                >
                    <Typography className={classes.text} 
                   
                    // "/timesheet","/quicksight-reports","/manage-projects","/Approve-timesheet","/project-configuration-report","/project-consolidated-reports"} 
                    style={{}}>Clients</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.submenu} >
                    <div className={classes.item} >
                        <Typography className={classes.text} component={NavLink} to="/add-clients">Add Clients</Typography>            
                    </div>
                    <div className={classes.item}>
                        <Typography className={classes.text}
                        component={NavLink} 
                        to="/list-clients" >Clients List</Typography>
                    </div>
                    <div className={classes.item}>
                        <Typography className={classes.text} component={NavLink} to="/clients-details">Clients Details</Typography>
                    </div>
                    

                </AccordionDetails>
            </Accordion>
            </Container>
            </div>
        </TabPanel>
        <TabPanel value="3">3rd tab</TabPanel>
        <TabPanel value="4">Item 4</TabPanel>
      </TabContext>
    </Box>
   </div>
  )
}

export default Sidebar