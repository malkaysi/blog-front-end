import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const SidebarNav = () => {

  return (
    <div>
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
    </div>
  )
}

export default SidebarNav;
