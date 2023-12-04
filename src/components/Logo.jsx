import React from 'react';
import '../css/logo.css';

const Logo = (props) => {
  return (
    <a title={props.title} href={props.href} className="logo">
      <img src={props.src} alt={props.title} />
    </a>
  );
}
export default Logo;
