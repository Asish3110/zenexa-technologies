import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import logo from '../assets/images/logo.png'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [serviceOpen, setServiceOpen] = useState(false)

  return (

    <div className='fixed top-0 left-0 w-full z-50 pt-0'>

      <nav className='w-full bg-[#020817]/90 backdrop-blur-xl border border-blue-900/30 shadow-[0_0_40px_rgba(0,0,255,0.15)]'>

        {/* ================================================= */}
        {/* NAVBAR CONTAINER */}
        {/* ================================================= */}

        <div className='h-[60px] flex items-center justify-between px-4 md:px-8'>

          {/* ================================================= */}
          {/* LEFT - LOGO */}
          {/* ================================================= */}

          <Link
            to='/'
            className='flex items-center no-underline'
          >

            <img
              src={logo}
              alt='Zenexa Logo'
              className='w-[130px] md:w-[220px] object-contain'
            />

          </Link>

          {/* ================================================= */}
          {/* DESKTOP MENU */}
          {/* ================================================= */}

          <div className='hidden lg:flex items-center gap-8 text-white font-medium text-[16px]'>

            {/* HOME */}
            <NavLink
              to='/'
              className={({ isActive }) =>
                `transition duration-300 no-underline ${
                  isActive
                    ? 'text-cyan-400'
                    : 'text-white hover:text-cyan-400'
                }`
              }
            >
              Home
            </NavLink>

            {/* ABOUT */}
            <NavLink
              to='/about'
              className={({ isActive }) =>
                `transition duration-300 no-underline ${
                  isActive
                    ? 'text-cyan-400'
                    : 'text-white hover:text-cyan-400'
                }`
              }
            >
              About Us
            </NavLink>

            {/* ================================================= */}
            {/* SERVICES DROPDOWN */}
            {/* ================================================= */}

            <div
              className='relative'
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >

              <button
                className={`flex items-center gap-1 transition duration-300 bg-transparent border-none cursor-pointer text-[16px] font-medium ${
                  serviceOpen
                    ? 'text-cyan-400'
                    : 'text-white hover:text-cyan-400'
                }`}
              >

                Services

                <ChevronDown
                  size={16}
                  className={`transition duration-300 ${
                    serviceOpen
                      ? 'rotate-180'
                      : ''
                  }`}
                />

              </button>

              {/* Dropdown */}
              <div
                className={`absolute top-[42px] left-0 w-[240px] bg-[#020817] border border-white/10 rounded-2xl p-3 transition-all duration-300 shadow-2xl ${
                  serviceOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >

                <NavLink
                  to='/development'
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl no-underline transition duration-300 ${
                      isActive
                        ? 'text-cyan-400 bg-white/5'
                        : 'text-white hover:text-cyan-400 hover:bg-white/5'
                    }`
                  }
                >

                  Development

                </NavLink>

                <NavLink
                  to='/career-elevate'
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl no-underline transition duration-300 ${
                      isActive
                        ? 'text-cyan-400 bg-white/5'
                        : 'text-white hover:text-cyan-400 hover:bg-white/5'
                    }`
                  }
                >

                  Career Elevate

                </NavLink>

              </div>

            </div>

            {/* CAREERS */}
            <NavLink
              to='/career'
              className={({ isActive }) =>
                `transition duration-300 no-underline ${
                  isActive
                    ? 'text-cyan-400'
                    : 'text-white hover:text-cyan-400'
                }`
              }
            >
              Careers
            </NavLink>

          </div>

          {/* ================================================= */}
          {/* RIGHT SIDE */}
          {/* ================================================= */}

          <div className='flex items-center gap-4'>

            {/* CONTACT BUTTON */}
            <Link
              to='/contact'
              className='hidden lg:flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white no-underline px-3 py-1 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-[0_0_20px_rgba(99,102,241,0.4)]'
            >
              Contact Us
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='lg:hidden text-white text-2xl bg-transparent border-none'
            >

              <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>

            </button>

          </div>

        </div>

        {/* ================================================= */}
        {/* MOBILE MENU */}
        {/* ================================================= */}

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? 'max-h-[500px] py-5' : 'max-h-0'
          }`}
        >

          <div className='flex flex-col items-center gap-4 text-white text-[16px] font-medium'>

            {/* HOME */}
            <NavLink
              to='/'
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition duration-300 no-underline ${
                  isActive
                    ? 'text-cyan-400'
                    : 'text-white hover:text-cyan-400'
                }`
              }
            >
              Home
            </NavLink>

            {/* ABOUT */}
            <NavLink
              to='/about'
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition duration-300 no-underline ${
                  isActive
                    ? 'text-cyan-400'
                    : 'text-white hover:text-cyan-400'
                }`
              }
            >
              About Us
            </NavLink>

            {/* ================================================= */}
            {/* MOBILE SERVICES */}
            {/* ================================================= */}

            <div className='flex flex-col items-center gap-2'>

              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className={`flex items-center gap-1 bg-transparent border-none text-[16px] font-medium transition duration-300 ${
                  serviceOpen
                    ? 'text-cyan-400'
                    : 'text-white hover:text-cyan-400'
                }`}
              >

                Services

                <ChevronDown
                  size={18}
                  className={`transition duration-300 ${
                    serviceOpen
                      ? 'rotate-180'
                      : ''
                  }`}
                />

              </button>

              {/* Mobile Dropdown */}
              <div
                className={`overflow-hidden transition-all duration-500 flex flex-col items-center gap-2 ${
                  serviceOpen
                    ? 'max-h-[200px] opacity-100 mt-2'
                    : 'max-h-0 opacity-0'
                }`}
              >

                <NavLink
                  to='/development'
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `transition duration-300 no-underline text-[15px] ${
                      isActive
                        ? 'text-cyan-400'
                        : 'text-white hover:text-cyan-400'
                    }`
                  }
                >

                  Development

                </NavLink>

                <NavLink
                  to='/career-elevate'
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `transition duration-300 no-underline text-[15px] ${
                      isActive
                        ? 'text-cyan-400'
                        : 'text-white hover:text-cyan-400'
                    }`
                  }
                >

                  Career Elevate

                </NavLink>

              </div>

            </div>

            {/* CAREERS */}
            <NavLink
              to='/career'
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition duration-300 no-underline ${
                  isActive
                    ? 'text-cyan-400'
                    : 'text-white hover:text-cyan-400'
                }`
              }
            >
              Careers
            </NavLink>

            {/* CONTACT BUTTON */}
            <Link
              to='/contact'
              onClick={() => setMenuOpen(false)}
              className='bg-gradient-to-r from-blue-600 to-purple-600 text-white no-underline px-3 py-1 rounded-xl font-semibold mt-2'
            >
              Contact Us
            </Link>

          </div>

        </div>

      </nav>

    </div>

  )
}

export default Navbar