import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  Toolbar,
} from '@mui/material';
import React from 'react';
import RouterLinkItem  from './RouterLinkItem';

const drawerWidth = 240;

const routes = [
  {
    name: 'Home',
    url: `/blog`,
  },
  {
    name: 'Profile',
    url: `/blog/profile`,
  },
  {
    name: 'New Post',
    url: `/blog/post`,
  },
]

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
          {routes.map((route) => {
            return <RouterLinkItem key={route.name} route={route} primary={route.name} />
          })}
        </List>
      </Drawer>
    </Box>
  )
}

export default SidebarNav;
