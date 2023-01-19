import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Root = () => {

  return (
    <div>
      <div id="sidebar">
        <h1>Blog Full-Stack API App</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/profile`}>Profile</Link>
            </li>
            <li>
              <Link to={`/post`}>Post</Link>
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

export default Root;
