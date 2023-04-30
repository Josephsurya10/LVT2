import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarM from "../Makers/NavbarM"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Userlistapi=()=>  {
  const [data, setData] = useState([]);
  useEffect(() => {
    
    axios.get("http://localhost:8080/api/jobs")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []); 
  return (
    
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>USER</StyledTableCell>
            <StyledTableCell align="center">PHNO</StyledTableCell>
            <StyledTableCell align="center">EMAIL</StyledTableCell>
            <StyledTableCell align="center">ADDRESS</StyledTableCell>
            <StyledTableCell align="center">DESCRIPTION</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {item.createdby}
              </StyledTableCell>
              <StyledTableCell align="center">{item.Uphone}</StyledTableCell>
              <StyledTableCell align="center">{item.Uemail}</StyledTableCell>
              <StyledTableCell align="center">{item.Uaddress}</StyledTableCell>
              <StyledTableCell align="center  ">{item.Udescription  }</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}
export default Userlistapi;