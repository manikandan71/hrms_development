import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './sidebar';
import Header from "./header";
import Footer from "./footer"
import Timesheet from '../pages/Timesheet';
import ApproveTimesheet from '../pages/approve-timesheet';
import ManageProjects from '../pages/manage-projects';
import MyProjects from '../pages/my-projects';
import ProjectConfiguration from '../pages/project-configuration';
import ProjectConsolidatedReports from '../pages/project-consolidated-reports';
import QuicksightReports from '../pages/quicksight-reports';
import Login from "./login";
import Employees from "../pages/employee"
import SignUp from './signup';
import AddClients from "../pages/add-clients"
import ListClients from "../pages/list-clients"


function MyRouter   ()  {   
  return (<>
  <div style={{backgroundColor:'#f8f9fa'}}>

    <BrowserRouter >
{
  window.location.pathname !== '/' && <Header/>  
}

    {/* <div  style={{display:'flex'}}> */}
    <div class="row">
      <div class="col-lg-2 col-md-3 col-sm-4 col-12" > {
  window.location.pathname !== '/' && <Sidebar/>  
}</div>
      <div class="col-lg-10 col-md-9 col-sm-8 col-12">
      <Routes style={{width:'80%'}}>
      <Route path='/' exact element={<Login/>} />
       <Route path='/timesheet' exact element={<Timesheet/>} />
        <Route path='/approve-timesheet' exact element={<ApproveTimesheet/>} />
        <Route path='/manage-projects' exact element={<ManageProjects/>} />
        <Route path='/my-projects' exact element={<MyProjects/>} />
        <Route path='/project-configuration-report' exact element={<ProjectConfiguration/>} />
        <Route path='/project-consolidated-reports' exact element={<ProjectConsolidatedReports/>} />
        <Route path='/quicksight-reports' exact element={<QuicksightReports/>} />
        <Route path='/employee' exact element={<Employees/>} />
        <Route path='/sign-up' exact element={<SignUp/>} />
        <Route path='/add-clients' exact element={<AddClients/>} />
        <Route path='/list-clients' exact element={<ListClients/>} />
    </Routes>
    {
    window.location.pathname !== '/' && <Footer/>
}
    </div>
    </div>

    </BrowserRouter>
    </div>
</>)  
}

export default MyRouter;