import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(country, ask, tones) {
  return { country, ask, tones };
}

const rows = [
  createData('Romania', 59.90, 157.352),
  createData('Spain & Canary', 60.62, 653.955),
  createData('United Kingdom', 61.03, 572.414),
  createData('Greece', 61.12, 188.783),
  createData('Belgium', 65.94, 135.792),
  createData('Netherlands', 67.79, 200.198),
  createData('France', 68.26, 389.429),
  createData('Germany', 70.26, 416.925),
  createData('Italy', 71.28, 2.144860),
  createData('United States', 71.44, 1.093387),
];

export default function BasicGrid() {
  return (
    <TableContainer component={Paper} sx={{backgroundColor: "rgb(243, 237, 237)", maxWidth: 350, borderRadius: "15px", marginBottom:"30px"}}>
      <Table sx={{backgroundColor: "white" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Destination country</TableCell>
            <TableCell align="right">Ask (available seats km)</TableCell>
            <TableCell align="right">Total Co2 (tones)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.country}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.country}
              </TableCell>
              <TableCell align="right">{row.ask}</TableCell>
              <TableCell align="right">{row.tones}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}