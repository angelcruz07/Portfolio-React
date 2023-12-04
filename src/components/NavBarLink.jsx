import React from 'react';
import PropTypes from 'prop-types'
import '../css/navbarlink.css'

const NavBarLink = ({link, children}) => {
  return (
    <a href={link} className='link-navbar'>{children}</a>
  )
}

export default NavBarLink

NavBarLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};