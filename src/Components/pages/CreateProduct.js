import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Input,
  FormHelperText,
  Container,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import TextareaAutosize from '@mui/material/TextareaAutosize'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    brand: '',
    price: 0,
    file: null,
  });

  const [categoires, setCategories] = useState([]);
  const [editorValue, setEditorValue] = useState('');


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  const handleSubmit = () => {
    // Add your form submission logic here
    console.log('Form submitted with data:', formData);
    };
    
    useEffect(() => {
        
        function fetchCategories() {
             fetch(`https://localhost:7005/api/Products/categories`)
            .then(res => res.json())
               .then(data => {
                 setCategories(data)
                 console.log(data)
            } )
      }
      
      fetchCategories();
    },[])

  return (
    <Container>
      <Paper elevation={3} sx={{p:3}}>
      <form>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <TextField
          label="Brand"
          variant="outlined"
          fullWidth
          margin="normal"
          name="brand"
          value={formData.brand}
          onChange={handleInputChange}
        />
        <TextField
          label="Price"
          variant="outlined"
          fullWidth
          margin="normal"
          name="price"
          type="text"
          value={formData.price}
          onChange={handleInputChange}
        />
        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel htmlFor="category">Category</InputLabel>
          <Select
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
              {categoires.map(c => (
                <MenuItem value={c}>{c.toUpperCase()}</MenuItem>
             ))}
          </Select>
        </FormControl>
          <FormControl fullWidth margin="normal">
            <ReactQuill
              value={editorValue}
              onChange={handleEditorChange}
              placeholder="Product Description"
              theme="snow"
              style={{height:'200px',marginBottom:"20px"}}  
          />
        </FormControl>
      
          
        <FormControl fullWidth margin="normal">
          {/* <InputLabel htmlFor="file">File Upload</InputLabel> */}
          <Input
            type="file"
            name="file"
            id="file"
            onChange={handleFileChange}
          />
          <FormHelperText>Upload Product Image</FormHelperText>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ marginTop: '16px' }}
        >
          Submit
        </Button>
        </form>
        </Paper>      
    </Container>
  );
};

export default CreateProduct;
