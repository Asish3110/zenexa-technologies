// TestimonialSection.jsx

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

import testimonialBg from '../assets/images/testimonial-bg.jpg'

function TestimonialSection() {

  const testimonials = [

    {
      name: 'Rahul Sharma',
      role: 'Startup Founder',
      feedback:
        'Zenexa Technologies delivered a modern and scalable platform for our business. Their team was highly professional and exceeded our expectations.',
    },

    {
      name: 'Priya Verma',
      role: 'Business Owner',
      feedback:
        'The UI/UX quality and performance optimization were outstanding. Our website now looks premium and works flawlessly across all devices.',
    },

    {
      name: 'Amit Patel',
      role: 'Tech Entrepreneur',
      feedback:
        'From development to deployment, the process was smooth and efficient. Zenexa helped us launch our product faster with exceptional quality.',
    },

  ]

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {

    setCurrent((prev) => (prev + 1) % testimonials.length)

  }

  const prevSlide = () => {

    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )

  }

  /* Auto Slide */
  useEffect(() => {

    const interval = setInterval(() => {

      nextSlide()

    }, 5000)

    return () => clearInterval(interval)

  }, [])

  return (

    <section
      className='relative w-full py-20 md:py-28 overflow-hidden bg-fixed bg-center bg-cover'
      style={{
        backgroundImage: `url(${testimonialBg})`,
      }}
    >

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-[#020817]/80 backdrop-blur-[2px]'></div>

      {/* Glow */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-blue-600/20 blur-[140px] rounded-full'></div>

      <div className='relative z-10 max-w-5xl mx-auto px-4 md:px-8'>

        {/* Small Heading */}
        <p
          className='text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-sm tracking-[4px] uppercase mb-3 font-semibold'
          data-aos='fade-up'
        >

          Testimonials

        </p>

        {/* Heading */}
        <h2
          className='text-center text-white text-3xl md:text-5xl font-bold mb-12'
          data-aos='zoom-in'
        >

          What Clients Say

        </h2>

        {/* Slider */}
        <div className='relative flex items-center justify-center'>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className='absolute left-0 md:-left-16 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/10 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition duration-500'
          >

            <ChevronLeft size={24} />

          </button>

          {/* Testimonial Card */}
          <div
            key={current}
            data-aos='zoom-in'
            className='relative w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[30px] px-6 md:px-14 py-10 md:py-14 text-center overflow-hidden'
          >

            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-500/10'></div>

            {/* Quote Icon */}
            <div className='absolute top-6 left-8 text-white/10 text-7xl font-bold'>

              “

            </div>

            {/* Stars */}
            <div className='relative z-10 flex items-center justify-center gap-1 mb-6'>

              {[...Array(5)].map((_, i) => (

                <Star
                  key={i}
                  size={20}
                  className='text-yellow-400 fill-yellow-400'
                />

              ))}

            </div>

            {/* Feedback */}
            <p className='relative z-10 text-gray-200 text-[17px] md:text-[21px] leading-[34px] md:leading-[42px] max-w-3xl mx-auto mb-8'>

              "{testimonials[current].feedback}"

            </p>

            {/* User */}
            <div className='relative z-10'>

              <h3 className='text-white text-xl md:text-2xl font-semibold mb-2'>

                {testimonials[current].name}

              </h3>

              <p className='text-blue-300 text-sm md:text-base'>

                {testimonials[current].role}

              </p>

            </div>

          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className='absolute right-0 md:-right-16 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/10 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition duration-500'
          >

            <ChevronRight size={24} />

          </button>

        </div>

        {/* Dots */}
        <div className='flex items-center justify-center gap-3 mt-8'>

          {testimonials.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-500 rounded-full ${
                current === index
                  ? 'w-8 h-3 bg-gradient-to-r from-blue-500 to-purple-500'
                  : 'w-3 h-3 bg-white/30'
              }`}
            />

          ))}

        </div>

      </div>

    </section>

  )
}

export default TestimonialSection