import React,{useState, useEffect} from 'react'
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {useParams} from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ReplayIcon from '@mui/icons-material/Replay';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from '@mui/material/Link';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  TextareaAutosize,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
const MessagesDetail = () => {

    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [sent, setSent] = useState('');

     const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
  });
    
    
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    };
    
      const handleSubmit = () => {
    // Add your form submission logic here
    console.log('Form submitted with data:', formData);
    handleClose();
  };

    useEffect(() => {
        
        function fetchMessage(id) {
            fetch(`https://localhost:7005/api/Contacts/${id}`)
        .then(res => res.json())
            .then(data => {
                // console.log("Messages: " + data.name)
                // setContact(data.contacts)
                setName(data.name)
                setEmail(data.email)
                setSubject(data.subject)
                setMessage(data.message)
                setPhone(data.Phone)
                setSent(data.sentAt)
            })
        .catch(err => console.log(err))
        }

        fetchMessage(id)

    },[id])


  return (
      <Container maxWidth="md">
          {/* <h1>id: {id}</h1> */}
          <Stack spacing={2} direction="row" sx={{ display: "flex", justifyContent: "space-between" }}>
              <Link href="/messages">
              <Button variant="contained" sx={{
                  
                  background:"#cb4646",
                  color: "#fff",
                  "&:hover": {
                      background: "#be0000",
                      color:"#fff"
                  }
              }}>
                  <ArrowBackIcon/>
                      Back to All Messages</Button>
                  </Link>
               
            </Stack>
          <Typography gutterBottom>
              <h2>Sender: {name}</h2>
              <Stack spacing={3} direction="row">
              <Typography variant='h6' component={"h3"} >Email Address: {email}</Typography>
              <Typography variant='h6' component={"h3"} >Sent At: {sent.substring(0,10)}</Typography>
              </Stack>
          </Typography>
          <Typography gutterBottom>
              <h2>Subject: { subject}</h2>
          </Typography>
          <Typography gutterBottom>
              <Typography variant='h6' component={"h2"}>
                  <strong>Message:</strong> <Typography >{message}</Typography>
           </Typography>
          </Typography>
          <Typography gutterBottom sx={{marginTop:"3rem",justifyContent:"flex-end"}}>
            <Stack spacing={2} direction="row" sx={{display:"flex",justifyContent:"space-between"}}>
                <Button variant="contained" onClick={handleOpen}>Reply <ReplayIcon/></Button>
            </Stack>
          </Typography>

           <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Form Dialog</DialogTitle>
        <DialogContent>
          <TextField
            label="Subject"
            variant="outlined"
            fullWidth
            margin="normal"
            name="Subject"
            value={formData.title}
            onChange={handleInputChange}
          />
          <TextareaAutosize
            rowsMin={3}
            variant="outlined"          
            placeholder="Message"
            style={{ width: '100%', height:"150px", padding: '8px', marginTop: '16px' }}
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button variant='contained' onClick={handleSubmit} color="primary">
            Send <SendIcon sx={{paddingLeft:"3px"}}/>
          </Button>
        </DialogActions>
      </Dialog>
</Container>

  )
}

export default MessagesDetail