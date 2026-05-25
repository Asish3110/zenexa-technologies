// Development.jsx

import { useEffect, useState } from 'react'

import {
  ChevronLeft,
  ChevronRight,
  Code2,
  Smartphone,
  Globe,
  Database,
} from 'lucide-react'

import Navbar from '../components/Navbar'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

import serviceImg1 from '../assets/images/web-development.jpg'
import serviceImg2 from '../assets/images/app-development.jpg'
import serviceImg3 from '../assets/images/ai-ml.jpg'
import serviceImg4 from '../assets/images/data-analytics.jpg'

function Development() {

  const services = [

    {
      title: 'Web Development',
      description:
        'Modern, responsive, and high-performance websites designed to help businesses establish a strong digital presence and deliver seamless user experiences.',
      icon: <Globe size={28} />,
      image: serviceImg1,
    },

    {
      title: 'Mobile App Development',
      description:
        'Powerful Android and iOS applications built with scalable architecture, intuitive interfaces, and optimized performance for modern users.',
      icon: <Smartphone size={28} />,
      image: serviceImg2,
    },

    {
      title: 'Custom Software Solutions',
      description:
        'Tailored enterprise-grade software solutions that streamline business operations, improve productivity, and support long-term business growth.',
      icon: <Code2 size={28} />,
      image: serviceImg3,
    },

    {
      title: 'Cloud & Database Solutions',
      description:
        'Secure cloud infrastructure and scalable database systems designed for reliability, performance, and future-ready digital transformation.',
      icon: <Database size={28} />,
      image: serviceImg4,
    },

  ]

  const process = [

    'Requirement Analysis',
    'UI/UX Design',
    'Development',
    'Testing',
    'Deployment',
    'Support',

  ]

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {

    setCurrent((prev) =>
      prev === services.length - 1
        ? 0
        : prev + 1
    )

  }

  const prevSlide = () => {

    setCurrent((prev) =>
      prev === 0
        ? services.length - 1
        : prev - 1
    )

  }

  useEffect(() => {

    const interval = setInterval(() => {

      nextSlide()

    }, 4000)

    return () => clearInterval(interval)

  }, [])

  return (

    <>

      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

      <Navbar />

      <div className='w-full bg-[#020817] overflow-hidden pt-[70px]'>

        {/* ================================================= */}
        {/* HERO SECTION */}
        {/* ================================================= */}

        <section className='w-full py-16 md:py-24'>

          <div className='max-w-7xl mx-auto px-4 md:px-8'>

            {/* ================================================= */}
            {/* TOP CONTENT */}
            {/* ================================================= */}

            <div className='text-center mb-16'>

              <p className='text-cyan-400 uppercase tracking-[4px] text-[11px] md:text-xs mb-4'>

                Our Services

              </p>

              <h1 className='text-white text-[26px] md:text-[42px] font-bold leading-[1.1] max-w-3xl mx-auto mb-5'>

                Innovative Development
                Solutions For Modern Businesses

              </h1>

              <p className='text-gray-300 text-[15px] md:text-[17px] leading-[30px] max-w-3xl mx-auto'>

                Zenexa Technologies delivers high-performance digital solutions
                including web development, mobile applications, enterprise systems,
                and cloud-based platforms designed to help businesses scale faster,
                improve efficiency, and create impactful user experiences.

              </p>

            </div>

            {/* ================================================= */}
            {/* SERVICE SLIDER */}
            {/* ================================================= */}

<div className='relative w-[96%] xl:w-[1400px] mx-auto xl:-translate-x-20 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[38px] p-6 md:p-12 overflow-hidden min-h-[520px]'>

              <div
                key={current}
                className='grid lg:grid-cols-2 gap-10 items-center animate-fade'
              >

                {/* ================================================= */}
                {/* LEFT CONTENT */}
                {/* ================================================= */}

                <div className='flex flex-col justify-center h-full'>

                  <div className='w-[65px] h-[65px] rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-6'>

                    {services[current].icon}

                  </div>

                  <h2 className='text-white text-[30px] md:text-[42px] font-bold mb-5 leading-[1.1]'>

                    {services[current].title}

                  </h2>

                  <p className='text-gray-300 text-[15px] md:text-[17px] leading-[32px] mb-10 max-w-xl'>

                    {services[current].description}

                  </p>

                  {/* ================================================= */}
                  {/* ARROWS */}
                  {/* ================================================= */}

                  <div className='flex items-center gap-4 mt-auto'>

                    <button
                      onClick={prevSlide}
                      className='w-[52px] h-[52px] rounded-full border border-white/10 bg-white/5 text-white hover:bg-cyan-500 transition duration-300 flex items-center justify-center'
                    >

                      <ChevronLeft size={22} />

                    </button>

                    <button
                      onClick={nextSlide}
                      className='w-[52px] h-[52px] rounded-full border border-white/10 bg-white/5 text-white hover:bg-cyan-500 transition duration-300 flex items-center justify-center'
                    >

                      <ChevronRight size={22} />

                    </button>

                  </div>

                </div>

                {/* ================================================= */}
                {/* RIGHT IMAGE */}
                {/* ================================================= */}

                <div className='flex justify-center lg:justify-end'>

                  <div className='w-full max-w-[520px] h-[360px] rounded-[30px] overflow-hidden border border-white/10 bg-[#0b1220]'>

                    <img
                      src={services[current].image}
                      alt='service'
                      className='w-full h-full object-cover transition duration-700'
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================================================= */}
        {/* PROCESS SECTION */}
        {/* ================================================= */}

        {/* ================================================= */}
{/* PROCESS SECTION */}
{/* ================================================= */}

<section className='w-full py-16 md:py-24 overflow-hidden'>

  <div className='max-w-7xl mx-auto px-4 md:px-8'>

    {/* ================================================= */}
    {/* HEADING */}
    {/* ================================================= */}

    <div className='text-center mb-20'>

      <p className='text-cyan-400 uppercase tracking-[4px] text-[11px] md:text-xs mb-4'>

        Our Process

      </p>

      <h2 className='text-white text-[28px] md:text-[42px] font-bold mb-5'>

        A streamlined approach to deliver exceptional results

      </h2>

      <p className='text-gray-400 text-[15px] md:text-[17px] max-w-2xl mx-auto leading-[30px]'>

        We follow a structured and collaborative workflow to ensure every project
        is delivered with quality, innovation, and performance.

      </p>

    </div>

    {/* ================================================= */}
    {/* PROCESS ROW */}
    {/* ================================================= */}

    <div className='relative'>

      {/* Horizontal Line */}
      <div className='hidden lg:block absolute top-[45px] left-[8%] w-[84%] h-[2px] bg-gradient-to-r from-cyan-500/20 via-cyan-400 to-cyan-500/20'></div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10'>

        {/* ================================================= */}
        {/* PHASE 1 */}
        {/* ================================================= */}

        <div className='text-center group'>

          <div className='w-[90px] h-[90px] rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,211,238,0.10)] group-hover:border-cyan-400/50 transition duration-500'>

            <i className='fas fa-lightbulb text-cyan-400 text-3xl'></i>

          </div>

          <h3 className='text-white text-[20px] font-semibold mb-3'>

            Planning

          </h3>

          <p className='text-gray-400 text-[14px] leading-[28px]'>

            Understanding business goals, challenges, and project requirements.

          </p>

        </div>

        {/* ================================================= */}
        {/* PHASE 2 */}
        {/* ================================================= */}

        <div className='text-center group'>

          <div className='w-[90px] h-[90px] rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,211,238,0.10)] group-hover:border-cyan-400/50 transition duration-500'>

            <i className='fas fa-pencil-ruler text-cyan-400 text-3xl'></i>

          </div>

          <h3 className='text-white text-[20px] font-semibold mb-3'>

            Design

          </h3>

          <p className='text-gray-400 text-[14px] leading-[28px]'>

            Crafting modern UI/UX experiences focused on usability and branding.

          </p>

        </div>

        {/* ================================================= */}
        {/* PHASE 3 */}
        {/* ================================================= */}

        <div className='text-center group'>

          <div className='w-[90px] h-[90px] rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,211,238,0.10)] group-hover:border-cyan-400/50 transition duration-500'>

            <i className='fas fa-code text-cyan-400 text-3xl'></i>

          </div>

          <h3 className='text-white text-[20px] font-semibold mb-3'>

            Development

          </h3>

          <p className='text-gray-400 text-[14px] leading-[28px]'>

            Building scalable and high-performance digital solutions with precision.

          </p>

        </div>

        {/* ================================================= */}
        {/* PHASE 4 */}
        {/* ================================================= */}

        <div className='text-center group'>

          <div className='w-[90px] h-[90px] rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,211,238,0.10)] group-hover:border-cyan-400/50 transition duration-500'>

            <i className='fas fa-vial text-cyan-400 text-3xl'></i>

          </div>

          <h3 className='text-white text-[20px] font-semibold mb-3'>

            Testing

          </h3>

          <p className='text-gray-400 text-[14px] leading-[28px]'>

            Ensuring flawless performance, security, and user experience.

          </p>

        </div>

        {/* ================================================= */}
        {/* PHASE 5 */}
        {/* ================================================= */}

        <div className='text-center group'>

          <div className='w-[90px] h-[90px] rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,211,238,0.10)] group-hover:border-cyan-400/50 transition duration-500'>

            <i className='fas fa-rocket text-cyan-400 text-3xl'></i>

          </div>

          <h3 className='text-white text-[20px] font-semibold mb-3'>

            Launch

          </h3>

          <p className='text-gray-400 text-[14px] leading-[28px]'>

            Deploying solutions with continuous support and future scalability.

          </p>

        </div>

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

export default Development