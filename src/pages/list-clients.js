import React from 'react';
import Box from '@mui/material/Box';
import client1 from "../Assets/Images/client1.png";
import client2 from "../Assets/Images/client2.jpg";
import client3 from "../Assets/Images/client3.jpg";
import client4 from "../Assets/Images/client4.jpg";
import client5 from "../Assets/Images/client5.jpg";
import client6 from "../Assets/Images/client6.jpg";
import client7 from "../Assets/Images/client7.jpg";
import client8 from "../Assets/Images/client8.jpg";
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function ListClients() {
  return (
    <div className="page" style={{padding:"50px 5%"}}>
      <div style={{textAlign:'left'}}>
      <h4>Clients</h4>
      <p>HRMS / Clients / List</p>
      </div>
      <div >
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12"> 
          <Box
        sx={{
          boxShadow: 3, 
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center'
        }}
      >
        <img src={client1} alt="" style={{borderRadius:'50%'}}/>
        <h4>John Smith</h4>
        <p>CEO</p>
        <h6 style={{marginTop:'-20px'}}>vPro Infoweb LLC.</h6>
        <div style={{display:'flex',justifyContent: "space-around",padding:'10px 0'}}>
        <Button variant="contained" style={{backgroundColor:'#f68c1f',fontSize: "12px",padding:'6px'}}>View Profile </Button>
        <Button variant="contained" style={{backgroundColor:'#4DCA88',marginLeft:'10px',fontSize: "12px",padding:'6px'}}>Message</Button>

        </div>

          <div className="social-media" style={{}}>
         < FacebookIcon className="social-icon"/>
         <TwitterIcon className="social-icon"/>
         <InstagramIcon className="social-icon"/>
          </div>
      </Box>
           </div>
          <div class="col-lg-4 col-md-6 col-12">
          <Box
        sx={{
          boxShadow: 3, 
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center'
        }}
      >
        <img src={client5} alt="" style={{borderRadius:'50%'}}/>
        <h4>Hossein Shams</h4>
        <p>CEO</p>
        <h6 style={{marginTop:'-20px'}}>BT Technology</h6>
        <div style={{display:'flex',justifyContent: "space-around",padding:'10px 0'}}>
        <Button variant="contained" style={{backgroundColor:'#f68c1f',fontSize: "12px",padding:'6px'}}>View Profile </Button>
        <Button variant="contained" style={{backgroundColor:'#4DCA88',marginLeft:'10px',fontSize: "12px",padding:'6px'}}>Message</Button>

        </div>

          <div className="social-media" style={{}}>
         < FacebookIcon className="social-icon"/>
         <TwitterIcon className="social-icon"/>
         <InstagramIcon className="social-icon"/>
          </div>
      </Box>
            </div>
          <div class="col-lg-4 col-md-6 col-12"> 
          <Box
        sx={{
          boxShadow: 3, 
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center'
        }}
      >
        <img src={client2} alt="" style={{borderRadius:'50%'}}/>
        <h4>Maryam Amiri</h4>
        <p>CEO</p>
        <h6 style={{marginTop:'-20px'}}>Core Infoweb Pvt.</h6>
        <div style={{display:'flex',justifyContent: "space-around",padding:'10px 0'}}>
        <Button variant="contained" style={{backgroundColor:'#f68c1f',fontSize: "12px",padding:'6px'}}>View Profile </Button>
        <Button variant="contained" style={{backgroundColor:'#4DCA88',marginLeft:'10px',fontSize: "12px",padding:'6px'}}>Message</Button>

        </div>

          <div className="social-media" style={{}}>
         < FacebookIcon className="social-icon"/>
         <TwitterIcon className="social-icon"/>
         <InstagramIcon className="social-icon"/>
          </div>
      </Box>
           </div>
          <div class="col-lg-4 col-md-6 col-12"> 
          <Box
        sx={{
          boxShadow: 3, 
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center'
        }}
      >
        <img src={client6} alt="" style={{borderRadius:'50%'}}/>
        <h4>Tim Hank</h4>
        <p>CEO</p>
        <h6 style={{marginTop:'-20px'}}>AUR Tech LLC.</h6>
        <div style={{display:'flex',justifyContent: "space-around",padding:'10px 0'}}>
        <Button variant="contained" style={{backgroundColor:'#f68c1f',fontSize: "12px",padding:'6px'}}>View Profile </Button>
        <Button variant="contained" style={{backgroundColor:'#4DCA88',marginLeft:'10px',fontSize: "12px",padding:'6px'}}>Message</Button>

        </div>

          <div className="social-media" style={{}}>
         < FacebookIcon className="social-icon"/>
         <TwitterIcon className="social-icon"/>
         <InstagramIcon className="social-icon"/>
          </div>
      </Box>
           </div>
          <div class="col-lg-4 col-md-6 col-12"> 
          <Box
        sx={{
          boxShadow: 3, 
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center'
        }}
      >
        <img src={client3} alt="" style={{borderRadius:'50%'}}/>
        <h4>John Smith</h4>
        <p>CEO</p>
        <h6 style={{marginTop:'-20px'}}>WrapTheme Pvt.</h6>
        <div style={{display:'flex',justifyContent: "space-around",padding:'10px 0'}}>
        <Button variant="contained" style={{backgroundColor:'#f68c1f',fontSize: "12px",padding:'6px'}}>View Profile </Button>
        <Button variant="contained" style={{backgroundColor:'#4DCA88',marginLeft:'10px',fontSize: "12px",padding:'6px'}}>Message</Button>

        </div>

          <div className="social-media" style={{}}>
         < FacebookIcon className="social-icon"/>
         <TwitterIcon className="social-icon"/>
         <InstagramIcon className="social-icon"/>
          </div>
      </Box>
           </div>
          <div class="col-lg-4 col-md-6 col-12"> 
          <Box
        sx={{
          boxShadow: 3, 
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center'
        }}
      >
        <img src={client7} alt="" style={{borderRadius:'50%'}}/>
        <h4>Frank Camly</h4>
        <p>CEO</p>
        <h6 style={{marginTop:'-20px'}}>Carlson Software</h6>
        <div style={{display:'flex',justifyContent: "space-around",padding:'10px 0'}}>
        <Button variant="contained" style={{backgroundColor:'#f68c1f',fontSize: "12px",padding:'6px'}}>View Profile </Button>
        <Button variant="contained" style={{backgroundColor:'#4DCA88',marginLeft:'10px',fontSize: "12px",padding:'6px'}}>Message</Button>

        </div>

          <div className="social-media" style={{}}>
         < FacebookIcon className="social-icon"/>
         <TwitterIcon className="social-icon"/>
         <InstagramIcon className="social-icon"/>
          </div>
      </Box>
           </div>
          <div class="col-lg-4 col-md-6 col-12">
          <Box
        sx={{
          boxShadow: 3, 
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center'
        }}
      >
        <img src={client4} alt="" style={{borderRadius:'50%'}}/>
        <h4>Gary Camara</h4>
        <p>CEO</p>
        <h6 style={{marginTop:'-20px'}}>Fly2 Infotech</h6>
        <div style={{display:'flex',justifyContent: "space-around",padding:'10px 0'}}>
        <Button variant="contained" style={{backgroundColor:'#f68c1f',fontSize: "12px",padding:'6px'}}>View Profile </Button>
        <Button variant="contained" style={{backgroundColor:'#4DCA88',marginLeft:'10px',fontSize: "12px",padding:'6px'}}>Message</Button>

        </div>

          <div className="social-media" style={{}}>
         < FacebookIcon className="social-icon"/>
         <TwitterIcon className="social-icon"/>
         <InstagramIcon className="social-icon"/>
          </div>
      </Box>
            </div>
          <div class="col-lg-4 col-md-6 col-12"> 
          <Box
        sx={{
          boxShadow: 3, 
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center'
        }}
      >
        <img src={client8} alt="" style={{borderRadius:'50%'}}/>
        <h4>John Smith</h4>
        <p>CEO</p>
        <h6 style={{marginTop:'-20px'}}>WrapTheme Pvt.</h6>
        <div style={{display:'flex',justifyContent: "space-around",padding:'10px 0'}}>
        <Button variant="contained" style={{backgroundColor:'#f68c1f',fontSize: "12px",padding:'6px'}}>View Profile </Button>
        <Button variant="contained" style={{backgroundColor:'#4DCA88',marginLeft:'10px',fontSize: "12px",padding:'6px'}}>Message</Button>

        </div>

          <div className="social-media" style={{}}>
         < FacebookIcon className="social-icon"/>
         <TwitterIcon className="social-icon"/>
         <InstagramIcon className="social-icon"/>
          </div>
      </Box>
           </div>
        </div>
      
      </div>
    </div>
  )
}

export default ListClients