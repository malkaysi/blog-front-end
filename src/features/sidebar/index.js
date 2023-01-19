import {
  Box,
  Divider,
  Drawer,
  List,
  Toolbar,
} from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import RouterLinkItem from './RouterLinkItem';

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
    <Box sx={{ display: 'flex', bgcolor: 'background.paper' }} >
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
        <div id="detail">
         <Outlet />
       </div>
      </Drawer>
    </Box>
  )
}

export default SidebarNav;
