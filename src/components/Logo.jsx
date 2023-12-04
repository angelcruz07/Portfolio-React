import React from 'react'
import '../css/logo.css'
const Logo = ({title, href, src}) => {
  return (
    <a title={title}  href={href} className="logo">
      <img src={src} alt={title}></img>
      </a>
  )
}

export default Logo