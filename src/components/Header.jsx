import Logo from './Logo'
import MenuIcon from './MenuIcon'
import NavBar from './NavBar'

import '../css/header.css'

const Header = () => {
  return (
  <header className="header">
      <Logo title="Angel Cruz" href="#" src="/img/logo.png"/>
      <MenuIcon/>
      <NavBar/>
   </header>
  )
}

export default Header