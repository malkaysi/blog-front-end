import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  /*   ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText,  */
  Toolbar,
} from '@mui/material';
/* import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail'; */
import React from 'react';
import { RouterLinks } from './RouterLinks';
// import { Link, Outlet } from 'react-router-dom';
const drawerWidth = 240;




const SidebarNav = () => {

  return (
    /*  <div>
       <div id="sidebar">
         <h1>Blog Full-Stack API App</h1>
         <nav>
           <ul>
             <li>
               <Link to={`/blog`}>Home</Link>
             </li>
             <li>
               <Link to={`/blog/profile`}>Profile</Link>
             </li>
             <li>
               <Link to={`/blog/post`}>Post</Link>
             </li>
           </ul>
         </nav>
       </div>
       <div id="detail">
         <Outlet />
       </div>
     </div> */

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <RouterLinks />
        </List>
      </Drawer>
    </Box>
  )
}

export default SidebarNav;
