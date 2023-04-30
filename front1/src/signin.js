import React,{useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import "./signup.css";
import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Navbarfirst from './Navbarfirst';
const Signin = () => {
  const [useremail, setemailaddress] = useState('');
  const [userpassword, setpassword] = useState('');
  const navigate = useNavigate();
  const handlesignin = (event) => {
    event.preventDefault();
     axios.post('http://localhost:8080/api/auth/signin', {useremail,userpassword})
      .then(response => {
        if(response.data.Urole==='maker'){
          navigate("/maker")
        }
        else{
          navigate("/user");
        }
      })
      .catch(error => console.error(error));
  };
  return (
    <div>
      <Navbarfirst/>
    <form onSubmit={handlesignin}>
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                
                <span className="h1 fw-bold mb-0">VJM</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => setemailaddress(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setpassword(e.target.value)}/>

              <Button variant='contained' type='submit'>Login</Button>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <br/>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="/signup"  style={{color: '#393f81'}}>Register here</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted"> Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
    </form>
    </div>
  );
}

export default Signin;  