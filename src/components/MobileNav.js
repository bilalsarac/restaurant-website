import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { GrMenu, GrClose } from "react-icons/gr";
import "./styles/MobileNav.css";

const MobileNav = () => {

  const [open, setOpen] = useState(false);

  const handleClick =() => {
    setOpen(!open);
  };


  const closeMenu = <GrMenu className="hamburger" size="20px" onClick={handleClick}/>
  const openMenu = <GrClose className="hamburger close-menu" size="20px" onClick={handleClick}/>

  const closeMobileMenuOnClick = () => {
    setOpen(false)
  };

  return (
    <nav className="mobile-nav">
      {open? openMenu : closeMenu}
      {open && <NavLinks isMobile={true} closeMobileMenu = {closeMobileMenuOnClick} />}
    </nav>
  )
}

export default MobileNav