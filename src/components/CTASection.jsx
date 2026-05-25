// CTASection.jsx

import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function CTASection() {

  return (

    <section className='w-full bg-[#020817] py-10 md:py-14 overflow-hidden relative'>

      {/* Background Glow */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-blue-600/20 blur-[120px] rounded-full'></div>

      <div className='max-w-7xl mx-auto px-4 md:px-8 relative z-10'>

        <div
          className='relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[28px] px-5 md:px-12 py-10 md:py-12 overflow-hidden'
          data-aos='zoom-in'
        >

          {/* Gradient Overlay */}
          <div className='absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-500/10'></div>

          {/* Small Glow */}
          <div className='absolute -top-12 -left-12 w-[180px] h-[180px] bg-blue-500/20 rounded-full blur-[90px]'></div>

          <div className='absolute -bottom-12 -right-12 w-[180px] h-[180px] bg-purple-500/20 rounded-full blur-[90px]'></div>

          <div className='relative z-10 text-center'>

            {/* Small Heading */}
            <p
              className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-[12px] md:text-sm tracking-[3px] uppercase mb-3 font-semibold'
              data-aos='fade-up'
            >

              Let’s Build Together

            </p>

            {/* Main Heading */}
            <h2
  className='text-white text-2xl md:text-4xl font-bold leading-[38px] md:leading-[52px] max-w-5xl mx-auto mb-4'
  data-aos='zoom-in'
>

              Transform Your Ideas Into
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>

                {' '}Digital Solutions

              </span>

            </h2>

            {/* Description */}
            <p
  className='text-gray-300 text-[14px] md:text-[17px] leading-[28px] max-w-4xl mx-auto mb-8'
  data-aos='fade-up'
>

  From web and mobile applications to AI-driven solutions and enterprise software,
  Zenexa Technologies helps businesses innovate, scale, and grow with cutting-edge technology.

</p>

            {/* Buttons */}
            <div
              className='flex flex-col sm:flex-row justify-center items-center gap-3'
              data-aos='fade-up'
            >

              {/* Primary Button */}
              <Link
                to='/contact'
                className='group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white no-underline px-6 md:px-7 py-3 rounded-xl font-semibold text-[15px] shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:scale-105 transition duration-500'
              >

                Start Project

                <ArrowRight
                  size={18}
                  className='group-hover:translate-x-1 transition duration-300'
                />

              </Link>

              {/* Secondary Button */}
              <Link
                to='/services'
                className='inline-flex items-center justify-center border border-white/15 text-white no-underline px-6 md:px-7 py-3 rounded-xl font-semibold text-[15px] hover:bg-white/5 transition duration-500'
              >

                Our Services

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default CTASection