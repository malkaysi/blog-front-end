import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

export const RouterLink = ({ route }) => {

  if (isEmpty(route)) {
    return null;
  }

  return (
    <Link to={route.url}>{route.name}</Link>
  )
}

RouterLink.propTypes = {
  route: PropTypes.object.isRequired,
}