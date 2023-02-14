import React from 'react';
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';


const NavLinks = (props) => {
  const animateFrom = {opacity: 0, x: -50, y: -50}
  const animateTo = {opacity: 1, x: 0, y: 0}
  return (
    <motion.ul className="menu-items" initial={animateFrom} animate={animateTo} transition={{delay: 0.05}}>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{delay: 0.05}}
              onClick={() => props.isMobile && props.closeMobileMenu()}
              >
                <NavLink to="/" className="active-links">Home</NavLink>
              </motion.li>
            <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.10}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <NavLink to="/about">About</NavLink>
            </motion.li>
            <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.15}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <NavLink to="/menu">Menu</NavLink>
            </motion.li>
            <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.20}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <NavLink to="/reservations" className="active-links">Reservations</NavLink>
            </motion.li>
            <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.25}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <NavLink to="/orderonline">Order Online</NavLink>
            </motion.li>
            <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.30}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <NavLink to="/login">Login</NavLink>
            </motion.li>
            <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.35}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            className="donate"
            >
              <NavLink to="/donate">Donate</NavLink>
            </motion.li>
        </motion.ul>
  )
}

export default NavLinks