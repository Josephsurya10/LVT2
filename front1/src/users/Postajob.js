import React from 'react';
import {
  
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import "./Postajob.css";
import flowers from "../Photos/flowers.jpg";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import axios from 'axios';
import Navbaroff from './Navbaroff';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import {useNavigate}  from 'react-router-dom';
const Postajob = () => {
  
    const [createdby, setcreatedby] = useState('');
    const [Uphone, setphonenumber] = useState('');
    const [Uemail, setemailaddress] = useState('');
    const [Uaddress, setaddress] = useState('');
    //const [typeofclothing, settypeofclothing] = useState('');
    const [Udescription, setdescription] = useState('');
    const navigate=useNavigate();
    
    const handlecustompost = (event) => {
      event.preventDefault();
       axios.post('http://localhost:8080/api/post/postajob', {createdby,Uphone,Uemail,Uaddress,Udescription})
        .then(response => {
          //console.log(response);
          navigate("/maker");
        })
        .catch(error => console.error(error));
    };
    

  return (
    <div>
      <Navbaroff/>
    <form onSubmit={handlecustompost}>
    <MDBContainer className="my-5" >

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src={flowers} alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                
                <span className="h1 fw-bold mb-0">VJM</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Create a job with your desired design.</h5>

                <MDBInput wrapperClass='mb-4' label='created by' id='formControlLg' type='text' value={createdby} size="lg" onChange={(e)=> setcreatedby(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='phone number' id='formControlLg' type='phno' value={Uphone} size="lg" onChange={(e)=>setphonenumber(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='email address' id='formControlLg' type='email' value={Uemail} size="lg" onChange={(e)=>setemailaddress(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='address' id='formControlLg' type='address' value={Uaddress} size="lg" onChange={(e)=>setaddress(e.target.value)}/>
                
                <MDBInput wrapperClass='mb-4' label='description' id='formControlLg' type='description'value={Udescription} size="lg" onChange={(e)=>setdescription(e.target.value)}/>
                <Stack direction="row" alignItems="center" spacing={2}>
                <Button variant="outlined" component="label">
                    Upload images
                    <input hidden accept=   "image/*" multiple type="file" />
                </Button>
                </Stack>
                <br/>

               <Button variant='contained'  size='lg' type='submit'>Post</Button>
              

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
    </form>
    </div>
  );
}

export default Postajob;