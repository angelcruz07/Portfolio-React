import React from 'react';
import '../css/navbarlink.css';

const NavBarLink = ({ children,  ...props }) => {
  return (
    <a {...props} className='link-navbar'>
      {children}
    </a>
  );
}

export default NavBarLink;
