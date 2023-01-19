import React from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText, 
} from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/MoveToInbox';

const RouterLinkItem = ({ route, primary }) => {

  return (
      <ListItem component={Link} to={route.url}>
        <ListItemButton>
          <ListItemIcon>
             <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={primary} />
        </ListItemButton>
      </ListItem>
  )
}

RouterLinkItem.propTypes = {
  route: PropTypes.object.isRequired,
  primary: PropTypes.string.isRequired,
}

export default RouterLinkItem;

