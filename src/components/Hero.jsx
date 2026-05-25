import { useEffect, useState } from 'react'

import hero1 from '../assets/images/hero-bg-1.jpg'
import hero2 from '../assets/images/hero-bg-2.jpg'

import laptop from '../assets/images/banner_laptop.svg'
import chart1 from '../assets/images/chart1.gif'
import chart2 from '../assets/images/chart2.gif'

function Hero() {

  const slides = [

    {
      image: hero1,

      heading: 'Transforming Ideas Into Scalable Digital Solutions',

      paragraph:
        'We build modern websites, intelligent applications, and powerful technology solutions that help businesses grow faster, smarter, and stronger in the digital world.',
    },

    {
      image: hero2,

      heading: 'Build a Stunning Career & Accelerate Your Future',

      paragraph:
        'From internships to industry-focused training programs, we help students and professionals gain real-world skills, confidence, and career opportunities in the tech industry.',
    },

  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      )

    }, 5000)

    return () => clearInterval(interval)

  }, [])

  return (

    <section className='relative w-full min-h-screen overflow-hidden'>

      {/* Background Images */}
      {slides.map((slide, index) => (

        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide
              ? 'opacity-100 z-10'
              : 'opacity-0 z-0'
          }`}
        >

          <img
            src={slide.image}
            alt='Hero Background'
            className='w-full h-full object-cover'
          />

          {/* Dark Overlay */}
          <div className='absolute inset-0 bg-black/70'></div>

        </div>

      ))}

      {/* Main Content */}
      <div className='relative z-20 flex items-center min-h-screen pt-24 pb-10'>

        <div className='max-w-7xl mx-auto px-4 md:px-6 w-full'>

          <div className='grid lg:grid-cols-2 items-center gap-12'>

            {/* LEFT CONTENT */}
            <div className='max-w-3xl'>

              <h1
                className='text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6'
                data-aos='fade-up'
              >

                {slides[currentSlide].heading}

              </h1>

              <p
                className='text-gray-300 text-lg md:text-xl leading-relaxed mb-8'
                data-aos='fade-up'
                data-aos-delay='200'
              >

                {slides[currentSlide].paragraph}

              </p>

              {/* Button */}
              <button
                className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-xl text-lg font-semibold hover:scale-105 transition duration-300 shadow-[0_0_25px_rgba(99,102,241,0.45)]'
                data-aos='fade-up'
                data-aos-delay='400'
              >

                Know More

              </button>

            </div>

            {/* RIGHT SIDE ANIMATION */}
            <div
              className='relative flex items-center justify-center mt-10 lg:mt-0'
              data-aos='fade-left'
            >

              {/* Laptop */}
              <img
                src={laptop}
                alt='Laptop'
                className='w-[320px] sm:w-[420px] md:w-[520px] lg:w-[650px] relative z-10 animate-pulse'
              />

              {/* Floating Card 1 */}
              <div className='absolute top-4 right-0 sm:top-10 bg-white p-2 sm:p-3 rounded-2xl shadow-2xl w-[110px] sm:w-[170px] animate-bounce z-20'>

                <img
                  src={chart1}
                  alt='Chart'
                  className='rounded-xl'
                />

              </div>

              {/* Floating Card 2 */}
              <div className='absolute bottom-4 left-0 sm:bottom-10 bg-white p-2 sm:p-3 rounded-2xl shadow-2xl w-[150px] sm:w-[240px] animate-bounce delay-300 z-20'>

                <img
                  src={chart2}
                  alt='Chart'
                  className='rounded-xl'
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Hero