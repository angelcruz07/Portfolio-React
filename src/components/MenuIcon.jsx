import React from 'react';
import styled from 'styled-components';

const StyleIcon = styled.i`
  font-size: 3.6rem;
  color: var(--text-color);
  display: none;
`;

const MenuIcon = () => {
  return (
    <StyleIcon>
      <i className="fa-solid fa-bars" id="menu-icon"></i>
    </StyleIcon>
  );
}

export default MenuIcon;