import React from 'react';
import { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import "./signup.css";

import Button from '@mui/material/Button';
import axios from 'axios';
import { API } from './backend';
import {useNavigate} from "react-router-dom"
import Navbarfirst from './Navbarfirst';
const Signup =()=> {
  const[Urole,setrole] = useState('');
  const [username, setname] = useState('');
  const[lastname,setlastname] =useState('');
  const [useremail, setemailaddress] = useState('');
  const [userpassword, setpassword] = useState('');
  const navigate = useNavigate();

    const handleFormSubmit = (event) => {
      console.log(Urole);
      event.preventDefault();
       axios.post('http://localhost:8080/api/auth/signup', {Urole,username,lastname,useremail,userpassword})
        .then(response => {
          navigate("/signin");
        })
        .catch(error => console.error(error));
    };
  return (
    <div>
      <Navbarfirst/>
    <form onSubmit={handleFormSubmit}>
    <MDBContainer  fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '600px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Role: maker/user' id='formControlLg' type='Role' size="lg" value={Urole} onChange={(e)=>setrole(e.target.value)} />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Name' id='formControlLg' type='Name' size="lg" value={username} onChange={(e)=>setname(e.target.value)} />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Lastname' id='formControlLg' type='lastname' value={lastname}size="lg"onChange={(e)=>setlastname(e.target.value)}  />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Emailaddress' id='formControlLg' type='email' size="lg" value={useremail} onChange={(e) => setemailaddress(e.target.value)} />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" value={userpassword} onChange={(e) => setpassword(e.target.value)} />
    
              <Button variant="contained" type='Submit'>Register</Button>
              <br/>
  
              <p className="mb-5 pb-lg-2" style={{color: 'white'}}>Already have an account? <a href="/signin" style={{color: 'white'}}>Login here</a></p>

              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </form>
    </div>
  );
}

export default Signup;