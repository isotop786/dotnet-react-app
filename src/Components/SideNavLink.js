import React from 'react'
import Link from '@mui/material/Link';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
const SideNavLink = ({title,href,icon}) => {
  return (
      <React.Fragment>
          <Link href={href} underline='none'>
    <ListItemButton>
      <ListItemIcon>
        <icon/>
      </ListItemIcon>
      <ListItemText primary="title" />
            </ListItemButton>
    </Link>
     </React.Fragment>
  )
}

export default SideNavLink