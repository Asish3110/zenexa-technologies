// Footer.jsx

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from 'react-icons/fa6'

import logo from '../assets/images/logo.png'

function Footer() {

  return (

    <footer className='w-full bg-[#020817] border-t border-white/10 overflow-hidden'>

      <div className='max-w-7xl mx-auto px-4 md:px-8 py-14'>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>

          {/* Logo & About */}
          <div>

            <img
              src={logo}
              alt='Zenexa Logo'
              className='w-[220px] mb-5'
            />

            <p className='text-gray-400 leading-[30px] text-[15px] mb-6'>

              Zenexa Technologies delivers modern web, mobile, AI, and enterprise
              solutions focused on innovation, scalability, and performance.

            </p>

            {/* Social Icons */}
            <div className='flex items-center gap-4'>

              <a
                href='/'
                className='w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition duration-500 no-underline'
              >

                <FaFacebookF size={16} />

              </a>

              <a
                href='/'
                className='w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition duration-500 no-underline'
              >

                <FaInstagram size={16} />

              </a>

              <a
                href='/'
                className='w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition duration-500 no-underline'
              >

                <FaLinkedinIn size={16} />

              </a>

              <a
                href='/'
                className='w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition duration-500 no-underline'
              >

                <FaXTwitter size={16} />

              </a>

            </div>

          </div>

          {/* Quick Links */}
<div>

  <h3 className='text-white text-xl font-semibold mb-4 leading-none -ml-0'>

    Quick Links

  </h3>

  <ul className='space-y-4 mt-[2px] -ml-6'>

    <li>

      <a
        href='/'
        className='text-gray-400 hover:text-blue-400 transition duration-300 no-underline'
      >

        Home

      </a>

    </li>

    <li>

      <a
        href='/about'
        className='text-gray-400 hover:text-blue-400 transition duration-300 no-underline'
      >

        About Us

      </a>

    </li>

    <li>

      <a
        href='/services'
        className='text-gray-400 hover:text-blue-400 transition duration-300 no-underline'
      >

        Services

      </a>

    </li>

    <li>

      <a
        href='/career'
        className='text-gray-400 hover:text-blue-400 transition duration-300 no-underline'
      >

        Careers

      </a>

    </li>

    <li>

      <a
        href='/contact'
        className='text-gray-400 hover:text-blue-400 transition duration-300 no-underline'
      >

        Contact

      </a>

    </li>

  </ul>

</div>

{/* Services */}
<div>

  <h3 className='text-white text-xl font-semibold mb-4 leading-none -ml-0'>

    Services

  </h3>

  <ul className='space-y-4 mt-[2px] -ml-6'>

    <li className='text-gray-400'>

      Web Development

    </li>

    <li className='text-gray-400'>

      App Development

    </li>

    <li className='text-gray-400'>

      AI / ML Solutions

    </li>

    <li className='text-gray-400'>

      Data Analytics

    </li>

    <li className='text-gray-400'>

      UI / UX Designing

    </li>

  </ul>

</div>
          {/* Contact Info */}
          <div>

            <h3 className='text-white text-xl font-semibold mb-6'>

              Contact Info

            </h3>

            <div className='space-y-5'>

              {/* Email */}
              <div className='flex items-start gap-4'>

                <div className='w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400'>

                  <FaEnvelope size={16} />

                </div>

                <div>

                  <p className='text-gray-400 text-[15px]'>

                    info@zenexa.tech

                  </p>

                </div>

              </div>

              {/* Phone */}
              <div className='flex items-start gap-4'>

                <div className='w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400'>

                  <FaPhone size={16} />

                </div>

                <div>

                  <p className='text-gray-400 text-[15px]'>

                    +91 98765 43210

                  </p>

                </div>

              </div>

              {/* Address */}
              <div className='flex items-start gap-4'>

                <div className='w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400'>

                  <FaLocationDot size={16} />

                </div>

                <div>

                  <p className='text-gray-400 text-[15px] leading-[28px]'>

                    Bhubaneswar, Odisha, India

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className='border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4'>

          <p className='text-gray-500 text-sm text-center md:text-left'>

            © 2026 Zenexa Technologies. All Rights Reserved.

          </p>

          <div className='flex items-center gap-6'>

            <a
              href='/'
              className='text-gray-500 hover:text-blue-400 text-sm transition duration-300 no-underline'
            >

              Privacy Policy

            </a>

            <a
              href='/'
              className='text-gray-500 hover:text-blue-400 text-sm transition duration-300 no-underline'
            >

              Terms & Conditions

            </a>

          </div>

        </div>

      </div>

    </footer>

  )
}

export default Footer