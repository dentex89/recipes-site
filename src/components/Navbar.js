import React, { useState } from "react"
import { Link } from 'gatsby'

//libary
import { FiAlignJustify } from 'react-icons/fi'

//logo
import logo from '../assets/images/logo.svg'

export default function Navbar() {

   const [show, setShow] = useState(false)

   return (
      <nav className='navbar'>
         <div className='nav-center'>
           <div className='nav-header'>
               <Link to="/">
                  <img src={logo} alt='simply recipes' />
               </Link>
               <button
                  className='nav-btn'
                  onClick={() => setShow(!show)}>
                  <FiAlignJustify />
               </button>
            </div>
            <div className={ show ? 'nav-links show-links' : 'nav-links' }>
               <Link to="/"
                  className='nav-link'
                  activeClassName='active-link'
                  onClick={() => setShow(false)}
               >
                  home
               </Link>
              <Link to="/recipes" className='nav-link' activeClassName='active-link'>recipes</Link>
              <Link to="/tags" className='nav-link' activeClassName='active-link'>tags</Link>
              <Link to="/about" className='nav-link' activeClassName='active-link'>about</Link>
              <div className='nav-link contact-link'>
                 <Link to="/contact" className='btn'>contact</Link>
              </div>
           </div>
         </div>
      </nav>
   )
}

