import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
const StyledTableCellM = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRowM = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Makerslist=()=>  {
  const [data, setData] = useState([]);
  useEffect(() => {
    
    axios.get("http://localhost:8080/api/makers")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []); 
  return (
    
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCellM>MAKERS</StyledTableCellM>
            <StyledTableCellM align="center">SPECIALIZATION</StyledTableCellM>
            <StyledTableCellM align="center">EMAIL</StyledTableCellM>
            <StyledTableCellM align="center">ADDRESS</StyledTableCellM>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <StyledTableRowM key={item.id}>
              <StyledTableCellM component="th" scope="row">
                {item.makersname}
              </StyledTableCellM>
              <StyledTableCellM align="center">{item.makersdescription}</StyledTableCellM>
              <Link href="#" underline='none'>{item.makersemail}</Link>
              <StyledTableCellM align="right">{item.makersaddress  }</StyledTableCellM>
            </StyledTableRowM>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}
export default Makerslist;