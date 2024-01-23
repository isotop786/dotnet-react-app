import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';
import Link from '@mui/material/Link';


import axios from 'axios'

function createData(productname, category, brand,imageFileName,price, createdAt,action) {
  return { productname, category, brand,imageFileName, price,createdAt, action };
}




const Products = () => {

    const [products, setProducts] = useState([])
    const [rows, setRows] = useState([]);

    
    const columns = [
        { id: 'name', label: 'Product Name', minWidth: 170 },
   {
    id: 'imageFileName',
    label: 'Image',
    // minWidth: 170,
    align: 'left',

  },
  { id: 'category', label: 'Category', minWidth: 100 },
  {
    id: 'brand',
    label: 'Brand',
    // minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
        },
 
  {
    id: 'price',
    label: 'Price',
    // minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
    },
    {
    id: 'action',
    label: 'Actions',
    // minWidth: 270,
    align: 'center',
  }
  
];

    useEffect(() => {
        axios.get("https://localhost:7005/api/Products")
            .then((res) => {
                setProducts(res.data)
              setRows(res.data)
                createData(res.data.name,res.data.category, res.data.brand, res.data.imageFileName, res.data.price, res.data.createdAt )
            // console.log(res.data)    
        })
    }, []);

     const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

    return (
      <>
       <Grid sx={{display:'flex', justifyContent:"flex-end", marginBottom:"1rem"}}>
                <Grid item>
                    <Link href="/products/create">
                    <Button variant="contained" color='success'>
                        <AddIcon />
                        <span>Add New Product</span>
                    </Button>
                    </Link>
              </Grid>
          </Grid>
      
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
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <img src={"https://localhost:7005"+item.imageFileName}  alt={`Image for ${item.name}`} style={{ width: '50px', height: '50px' }} />
              </TableCell>
            <TableCell>
                {item.category}
            </TableCell>    
            <TableCell>
                {item.brand}
            </TableCell>    
            <TableCell>
                {item.price}
            </TableCell>    
              <TableCell colSpan={3} sx={{display:"flex",justifyContent:"space-between"}}>
                <Button variant="contained" color="primary" >
                  Edit
                </Button>
                      <Button variant="contained" color="error">
                  Delete
                </Button>
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
  )
}

export default Products