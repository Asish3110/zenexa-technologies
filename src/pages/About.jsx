// About.jsx

import Navbar from '../components/Navbar'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

import aboutImg from '../assets/images/about-company.jpg'

function About() {

  const stats = [

    {
      number: '50+',
      label: 'Projects Completed',
    },

    {
      number: '20+',
      label: 'Happy Clients',
    },

    {
      number: '15+',
      label: 'Expert Team',
    },

    {
      number: '3+',
      label: 'Years Experience',
    },

  ]

  return (

    <>

      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

      <Navbar />

      <div className='w-full bg-[#020817] overflow-hidden pt-[80px]'>

        {/* ================================================= */}
        {/* ABOUT HERO SECTION */}
        {/* ================================================= */}

        <section className='relative w-full bg-[#020817] pt-4 md:pt-10 pb-20 overflow-hidden'>

          <div className='max-w-7xl mx-auto px-4 md:px-8 relative z-10'>

            {/* ================================================= */}
            {/* TOP HEADING */}
            {/* ================================================= */}

            <div className='text-center mb-10'>

              <p
                className='text-cyan-400 uppercase tracking-[4px] text-[11px] md:text-xs mb-4'
                data-aos='fade-up'
              >

                About Zenexa

              </p>

              <h1
                className='text-white text-[18px] md:text-[28px] font-bold leading-[1.1] md:leading-[1.05] max-w-xl mx-auto'
              >

                Transforming Businesses Through

                <span className='block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pb-2'>

                  Intelligent Technology

                </span>

              </h1>

            </div>

            {/* ================================================= */}
            {/* MAIN CONTENT */}
            {/* ================================================= */}

            <div className='grid lg:grid-cols-2 gap-10 items-center mt-6'>

              {/* LEFT CONTENT */}
              <div data-aos='fade-right'>

                <p className='text-gray-300 text-[15px] md:text-[17px] leading-[32px] mb-7'>

                  Zenexa Technologies delivers innovative digital solutions that help businesses
                  grow, scale, and thrive in today’s fast-evolving digital world. From modern
                  web and mobile applications to AI-powered platforms and enterprise-grade
                  software, we combine creativity, strategy, and advanced technologies to
                  build seamless and impactful digital experiences.

                </p>

                <p className='text-gray-300 text-[15px] md:text-[17px] leading-[32px] mb-9'>

                  We specialize in developing scalable, high-performance, and visually engaging
                  solutions tailored to diverse business needs. Our expertise spans web development,
                  mobile applications, AI/ML systems, cloud technologies, UI/UX design, data analytics,
                  and enterprise solutions focused on innovation, quality, and long-term partnerships.

                </p>

                {/* Buttons */}
                <div className='flex flex-wrap gap-4'>

                  <a
                    href='/services'
                    className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 md:px-6 py-3 rounded-xl font-medium text-sm md:text-base hover:scale-105 transition duration-500 no-underline shadow-[0_0_25px_rgba(34,211,238,0.20)]'
                  >

                    Explore Services

                  </a>

                  <a
                    href='/contact'
                    className='border border-white/15 bg-white/5 backdrop-blur-xl text-white px-5 md:px-6 py-3 rounded-xl font-medium text-sm md:text-base hover:bg-white/10 transition duration-500 no-underline'
                  >

                    Contact Us

                  </a>

                </div>

              </div>

              {/* ================================================= */}
              {/* RIGHT IMAGES */}
              {/* ================================================= */}

              <div
                className='relative flex justify-center lg:justify-end mt-10 lg:mt-0'
                data-aos='fade-left'
              >

                {/* Main Image */}
                <div className='relative'>

                  <div className='bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-4'>

                    <img
                      src={aboutImg}
                      alt='about'
                      className='w-full md:w-[460px] rounded-[28px] object-cover animate-float'
                    />

                  </div>

                  {/* Floating Small Image */}
                  <div className='absolute -bottom-8 -left-8 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[24px] p-3 hidden md:block'>

                    <img
                      src={aboutImg}
                      alt='about-small'
                      className='w-[190px] rounded-[18px] object-cover'
                    />

                  </div>

                </div>

              </div>

            </div>

            {/* ================================================= */}
            {/* STATS SECTION */}
            {/* ================================================= */}

            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-20'>

              {stats.map((item, index) => (

                <div
                  key={index}
                  className='bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl py-7 px-5 text-center hover:-translate-y-2 hover:border-cyan-400/40 transition duration-500'
                  data-aos='zoom-in'
                >

                  <h3 className='text-cyan-400 text-3xl md:text-5xl font-bold mb-3'>

                    {item.number}

                  </h3>

                  <p className='text-gray-300 text-sm md:text-base'>

                    {item.label}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ================================================= */}
        {/* VISION & MISSION */}
        {/* ================================================= */}

        <section className='w-full py-20 md:py-24 overflow-hidden bg-[#020817]'>

          <div className='max-w-7xl mx-auto px-4 md:px-8'>

            <div className='text-center mb-16'>

              <p
                className='text-cyan-400 uppercase tracking-[4px] text-xs mb-4'
                data-aos='fade-up'
              >

                Our Purpose

              </p>

              <h2
                className='text-white text-3xl md:text-5xl font-bold'
                data-aos='zoom-in'
              >

                Vision & Mission

              </h2>

            </div>

            <div className='grid md:grid-cols-2 gap-8'>

              {/* Vision */}
              <div
                className='bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-8 md:p-10 hover:-translate-y-2 transition duration-500'
                data-aos='fade-right'
              >

                <h3 className='text-white text-2xl md:text-3xl font-bold mb-5'>

                  Our Vision

                </h3>

                <p className='text-gray-300 text-[15px] md:text-[17px] leading-[32px]'>

                  To become a globally recognized technology company delivering innovative,
                  scalable, and intelligent digital solutions that empower businesses to
                  achieve sustainable growth and digital transformation.

                </p>

              </div>

              {/* Mission */}
              <div
                className='bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-8 md:p-10 hover:-translate-y-2 transition duration-500'
                data-aos='fade-left'
              >

                <h3 className='text-white text-2xl md:text-3xl font-bold mb-5'>

                  Our Mission

                </h3>

                <p className='text-gray-300 text-[15px] md:text-[17px] leading-[32px]'>

                  Our mission is to deliver high-quality software solutions through innovation,
                  creativity, and advanced technology while building long-term partnerships
                  that help businesses succeed in the digital era.

                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ================================================= */}
        {/* CTA SECTION */}
        {/* ================================================= */}

        <CTASection />

        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <Footer />

      </div>

    </>

  )
}

export default About