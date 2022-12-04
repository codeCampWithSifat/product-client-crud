import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <div className='header_container'>
      <nav>
        <Link to="/read">Read</Link>
        <Link to="/create">Create</Link>
        <Link to="/update">Update</Link>
        <Link to="/delete">Delete</Link>
      </nav>
    </div>
  )
}

export default Header
