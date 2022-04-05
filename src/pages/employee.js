import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import excel from "../Assets/Images/excel.jpg";
import _ from 'lodash';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const pageSize=5;
function Employees() {
  const [properties, setProperties ] = useState([]);
  const [users, setUsers ] = useState([]);
  const [paginatedUsers, setPaginatedUsers] = useState();
  const [currentPage, setCurrentPage ] = useState(1)
  

  useEffect(() =>{
    const token = localStorage.getItem('token');
    console.log(token);
    getValues();
     },[]);
  
  const pageCount = users? Math.ceil(users.length/pageSize) :0;
  if(pageCount === 1) return null;
  const pages = _.range(1, pageCount+1)

const getValues = () => {
  axios.get("https://622844909fd6174ca81ee5c6.mockapi.io/api/v1/employeedetails")
  .then((res) => {
    console.log(res);
    const allValues = res.data;
    console.log(allValues);
    setUsers(allValues);
    setPaginatedUsers(_(allValues).slice(0).take(pageSize).value());

  })
}
const pagination = (pageNo) => {
  setCurrentPage(pageNo);
  const startIndex = (pageNo - 1) * pageSize;
  const paginatatedUser = _(users).slice(startIndex).take(pageSize).value();
  setPaginatedUsers(paginatatedUser) 
}

// const getValues = () => {
//   axios.post("http://52.172.232.107:8080/api-services/getproperty", {
//     headers: {
//      "Content-Type" : "application/json",
//       "Authorization" : "Basic ${token}"
//     },
//   })
//   .then((res) => {
//     console.log(res);
//     const allValues = res.data.responseData.userPropertyList;
//     console.log(allValues);
//     setProperties(allValues);
//   })
// }

  return (<>
    
  <div className='page'     style={{padding:"50px 10%"}}>
    <div className='hrms-card' style={{padding: "20px 0"}}>
      <div class="container">
        <div class="row" style={{padding:'10px 0'}}>
          <div class="col-lg-8 col-md-6 col-6" style={{textAlign:"left",fontWeight:'500',color:'#7a7a7a'}}>Employee </div>

          <div class="col-lg-4 col-md-6 col-6"> <Button  href="/sign-up" role="button" style={{backgroundColor: "#3c8dbc", borderColor: "#367fa9",color:'#fff',fontSize:'12px'}}>ADD New Employee</Button></div>
        </div>        
        <div class="divider"/>
        <div class="row" style={{padding:"10px 0"}}>         
            <div class="col-12" style={{textAlign:"right"}}>
              <img src={excel} alt=""/>              
          </div>
        </div>
        <div class="row" style={{padding:"10px 0"}}>
          <div class="col" style={{textAlign:"left"}}>
            <button type="button" className="excel">Excel</button>
            <button type="button" className="excel">PDF</button>
            <button type="button" className="excel">Print</button>
          </div>
        </div>   
        <div class="row" style={{padding:"10px 30px"}}>
        <div className="employees-list" >
            {!paginatedUsers ? ("no users available") : (
              <table className='table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    paginatedUsers.map((user, id)=> (
                      <tr key={id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.number}</td>
                        <td><p variant="contained" className={(user.status === "complete")? "btn-success": "btn-failed"}>{user.status}</p></td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            )}
            <nav className='d-flex justify-content-end' style={{padding:"10px 0"}}>
              <ul className='pagination'>
                {
                  pages.map((page) => (
                    <li className={page === currentPage ? "page-item activ" : "page-item"} style={{cursor:"pointer"}}>
                      <p className='page-link' onClick={()=>pagination(page)}>{page}</p></li>
                  ))
                }
                
              </ul>
            </nav>
          </div>
        </div>    
      </div>
    </div>      
  </div>
   
  </>)
}

export default Employees;



