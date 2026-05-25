import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        data-aos='fade-up'
        className='bg-[#0F172A] text-white pt-40 pb-24'
      >

        <div className='container-custom text-center'>

          <p className='text-blue-400 uppercase tracking-widest mb-4 font-semibold'>
            Contact Us
          </p>

          <h1 className='text-5xl md:text-6xl font-bold leading-tight'>
            Let’s Build Something
            <span className='gradient-text block mt-3'>
              Amazing Together
            </span>
          </h1>

          <p className='text-gray-300 max-w-3xl mx-auto mt-8 leading-8 text-lg'>
            Have a project idea or need professional IT solutions?
            Connect with Zenexa Technologies today.
          </p>

        </div>

      </section>

      {/* Contact Section */}
      <section
        data-aos='fade-up'
        className='py-24 bg-white'
      >

        <div className='container-custom grid lg:grid-cols-2 gap-16'>

          {/* Contact Info */}
          <div>

            <p className='text-blue-600 uppercase tracking-widest mb-3 font-semibold'>
              Contact Information
            </p>

            <h2 className='text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight'>
              Get In Touch With
              <span className='gradient-text'> Our Team</span>
            </h2>

            <p className='text-gray-600 mt-8 leading-8'>
              We’re here to help you with web development,
              app development, AI solutions, internships,
              and career opportunities.
            </p>

            <div className='space-y-8 mt-12'>

              <div className='flex gap-5 items-start'>

                <div className='w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl'>
                  <i className='fas fa-phone'></i>
                </div>

                <div>

                  <h3 className='text-2xl font-bold text-[#0F172A] mb-2'>
                    Phone Number
                  </h3>

                  <p className='text-gray-600 text-lg'>
                    7735313005
                  </p>

                </div>

              </div>

              <div className='flex gap-5 items-start'>

                <div className='w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl'>
                  <i className='fas fa-envelope'></i>
                </div>

                <div>

                  <h3 className='text-2xl font-bold text-[#0F172A] mb-2'>
                    Email Address
                  </h3>

                  <p className='text-gray-600 text-lg'>
                    info@zenexa.com
                  </p>

                </div>

              </div>

              <div className='flex gap-5 items-start'>

                <div className='w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl'>
                  <i className='fas fa-location-dot'></i>
                </div>

                <div>

                  <h3 className='text-2xl font-bold text-[#0F172A] mb-2'>
                    Office Location
                  </h3>

                  <p className='text-gray-600 text-lg'>
                    Patia, Bhubaneswar, Odisha
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className='bg-[#F8FAFC] rounded-3xl p-10 shadow-2xl'>

            <h2 className='text-3xl font-bold text-[#0F172A] mb-10'>
              Send Message
            </h2>

            <form className='space-y-6'>

              <input
                type='text'
                placeholder='Your Name'
                className='w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-500'
              />

              <input
                type='email'
                placeholder='Your Email'
                className='w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-500'
              />

              <input
                type='text'
                placeholder='Subject'
                className='w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-500'
              />

              <textarea
                rows='6'
                placeholder='Write your message'
                className='w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-500'
              ></textarea>

              <button
                type='submit'
                className='w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-bold hover:scale-105 transition duration-300 shadow-xl'
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Map */}
      <section
        data-aos='fade-up'
        className='pb-24 bg-white'
      >

        <div className='container-custom'>

          <div className='rounded-3xl overflow-hidden shadow-2xl'>

            <iframe
              title='map'
              src='https://maps.google.com/maps?q=Patia%20Bhubaneswar&t=&z=13&ie=UTF8&iwloc=&output=embed'
              width='100%'
              height='500'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
            ></iframe>

          </div>

        </div>

      </section>

      <Footer />
    </>
  )
}

export default Contact