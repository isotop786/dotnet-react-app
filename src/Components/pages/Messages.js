import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import InfoIcon from '@mui/icons-material/Info';

export default function Messages() {

    const [contacts, setContact] = useState([])

    const [pageSize, setPageSize] = useState(5);
    const [rows, setRows] = useState([]);
    const [page, setPage] = React.useState(0);
   const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };
    
    function createData(firstName, lastName, email, subject,message) {
  return { firstName, lastName, email, subject,message};
}
    

    useEffect(() => {
        fetch(`https://localhost:7005/api/Contacts`)
        .then(res => res.json())
            .then(data => {
                console.log("Messages: " + data.contacts)
                // setContact(data.contacts)
                setRows(data.contacts)
                createData(data.contacts.firstName, data.contacts.lastName, data.contacts.email, data.contacts.subject.name, data.contacts.message)

            })
        .catch(err => console.log(err))
    }, [])


 const columns = [
{ id: 'firstName', label: 'First Name', minWidth: 70 },
{ id: 'lastName', label: 'Last Name', minWidth: 70 },
   {
    id: 'email',
    label: 'Email Address',
    minWidth: 170,
    align: 'left',

  },
  { id: 'subject', label: 'Subject', minWidth: 100 },

 
  {
    id: 'message',
    label: 'Message',
    // minWidth: 170,
    align: 'center',
   // format: (value) => value.toLocaleString('en-US'),
    },

    {
    id: 'action',
    label: 'Actions',
    // minWidth: 270,
    align: 'center',
  }
  
];


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
      <>
         <Paper sx={{ width: '100%', overflow: 'hidden' }}>
         
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
               {columns.map((column) => (
               <>
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                  </TableCell>
                
                </>   
              ))}
            </TableRow>
          </TableHead>
         
                        
        <TableBody>
          {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.firstName}</TableCell>
              <TableCell>{item.lastName}</TableCell>
              
            <TableCell>
                {item.email}
            </TableCell>    
            <TableCell>
                {item.subject.name}
            </TableCell>    
            <TableCell>
                {item.message.substring(0, 80)+(item.message.length > 80 ? "..." :"")}
            </TableCell>    
            <TableCell>
                          <Link href={`/messages/${item.id}`}><Button variant='contained' sx={{ background: "#345", color: "white", '&:hover': { background: "#666" }, }}>
                              <span >View</span>
                             <InfoIcon sx={{paddingLeft:"3px"}}/>
                    </Button></Link>
            </TableCell>    
             
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10,20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
            </Paper>

      </>
  );
}