import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header className='header'>
        <NavLink
          to='/'
          className='w-10 h-10 rounded-lg bg-white justify-center items-center flex font-bold shadow-md'
        >
          <p className='blue-gradient_text'>RP</p>
        </NavLink>
        <nav className='flex font-medium text-lg gap-7'>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-black'
            }
          >
            About
          </NavLink>
          <NavLink
            to='/projects'
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-black'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-black'
            }
          >
            Contact
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
