import NavBarLink from './NavBarLink'
import '../css/navbar.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
       <NavBarLink href="#home">Inicio</NavBarLink>
       <NavBarLink href="#about">Sobre Mi</NavBarLink>
       <NavBarLink href="#portfolio">Portafolio</NavBarLink>
       <NavBarLink href="#skills">Skills</NavBarLink>
       <NavBarLink href="#contact">Contacto</NavBarLink>
    </nav>
  )
}

export default NavBar