import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Routes, Route } from "react-router-dom"
import Box from '@mui/material/Box';

import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import TopHeader from './Components/TopHeader';
import Dashboard from './Components/Dashboard';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';

import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';


const drawerWidth = 200;


  const drawer = (
    <>
      <Toolbar sx={{background:"rgb(5 114 222)",borderLeft:"none"}} />
      <Divider />
      <List sx={{borderLeft:"none"}}>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );

function App() {
  return (
    <>
      
       
      {/* <Container>
      <Grid container spacing={2}>
        <Grid item>
           <Drawer
            variant="persistent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Grid>
        <Grid item xs={8}>
           <TopHeader />
        </Grid>
        </Grid>
        </Container>
      
    
        <Container container spacing={2}>
        
        <Box sx={{ p: 3 }}>
          <Grid item xs={4}>
           
          </Grid>
          <Grid item xs={8} sx={{p:4}}>
            <Routes>
              <Route path="/" element={ <Home/> } />
              <Route path="about" element={ <About/> } />
              <Route path="contact" element={ <Contact/> } />
            </Routes> 
        </Grid>
          </Box>
      </Container> */}

      <Dashboard/>
    </>
   
  );
}

export default App;
