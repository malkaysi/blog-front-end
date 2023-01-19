import React from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { RouterLink } from './RouterLink';



export const RouterLinks = () => {

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

  return (
    routes.map((route, index) => (
      <ListItem key={route.name} component={()=><RouterLink route={route}/>}>
        <ListItemButton>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    ))
  )
}

