import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Services() {

  const developmentServices = [
    {
      icon: 'fas fa-code',
      title: 'Website Development',
      desc: 'Modern responsive websites with high performance and scalability.',
    },

    {
      icon: 'fas fa-mobile-alt',
      title: 'App Development',
      desc: 'Android and iOS applications with modern user experience.',
    },

    {
      icon: 'fas fa-pencil-ruler',
      title: 'UI/UX Designing',
      desc: 'Creative and user-focused interface design solutions.',
    },

    {
      icon: 'fas fa-robot',
      title: 'AI Solutions',
      desc: 'AI-powered applications and automation systems.',
    },

    {
      icon: 'fas fa-database',
      title: 'Data Analytics',
      desc: 'Advanced analytics and business intelligence solutions.',
    },

    {
      icon: 'fas fa-cloud',
      title: 'Cloud Solutions',
      desc: 'Secure cloud infrastructure and deployment services.',
    },
  ]

  const careerServices = [
    {
      icon: 'fas fa-user-graduate',
      title: 'Internship Program',
      desc: 'Industry-focused internships with real-world projects.',
    },

    {
      icon: 'fas fa-briefcase',
      title: 'Job Assistance',
      desc: 'Placement support and interview preparation guidance.',
    },

    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'Training Programs',
      desc: 'Professional technical training for students and professionals.',
    },

    {
      icon: 'fas fa-file-alt',
      title: 'Resume Building',
      desc: 'ATS-friendly professional resume creation services.',
    },

    {
      icon: 'fas fa-certificate',
      title: 'Certification Courses',
      desc: 'Industry-recognized certification programs.',
    },

    {
      icon: 'fas fa-laptop-code',
      title: 'Live Projects',
      desc: 'Hands-on experience with real client projects.',
    },
  ]

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className='bg-[#0F172A] text-white pt-40 pb-24'>

        <div className='container-custom text-center'>

          <p className='text-blue-400 uppercase tracking-widest mb-4 font-semibold'>
            Our Services
          </p>

          <h1 className='text-5xl md:text-6xl font-bold leading-tight'>
            Innovative Solutions For
            <span className='gradient-text block mt-3'>
              Digital Growth
            </span>
          </h1>

          <p className='text-gray-300 max-w-3xl mx-auto mt-8 leading-8 text-lg'>
            We provide modern IT services, AI-powered solutions,
            training programs, and career acceleration opportunities.
          </p>

        </div>

      </section>

      {/* Development Services */}
      <section className='py-24 bg-white'>

        <div className='container-custom'>

          <div className='text-center mb-16'>

            <p className='text-blue-600 uppercase tracking-widest mb-3 font-semibold'>
              Development Services
            </p>

            <h2 className='text-4xl md:text-5xl font-bold text-[#0F172A]'>
              Modern IT &
              <span className='gradient-text'> Development Solutions</span>
            </h2>

          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

            {developmentServices.map((item, index) => (

              <div
                key={index}
                className='bg-[#F8FAFC] rounded-3xl p-10 hover:-translate-y-3 transition duration-500 shadow-lg'
              >

                <div className='w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-3xl mb-8'>
                  <i className={item.icon}></i>
                </div>

                <h3 className='text-2xl font-bold text-[#0F172A] mb-5'>
                  {item.title}
                </h3>

                <p className='text-gray-600 leading-8'>
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Career Services */}
      <section className='py-24 bg-[#F8FAFC]'>

        <div className='container-custom'>

          <div className='text-center mb-16'>

            <p className='text-blue-600 uppercase tracking-widest mb-3 font-semibold'>
              Accelerate Your Career
            </p>

            <h2 className='text-4xl md:text-5xl font-bold text-[#0F172A]'>
              Career Growth &
              <span className='gradient-text'> Training Programs</span>
            </h2>

          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

            {careerServices.map((item, index) => (

              <div
                key={index}
                className='bg-white rounded-3xl p-10 hover:-translate-y-3 transition duration-500 shadow-lg'
              >

                <div className='w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-3xl mb-8'>
                  <i className={item.icon}></i>
                </div>

                <h3 className='text-2xl font-bold text-[#0F172A] mb-5'>
                  {item.title}
                </h3>

                <p className='text-gray-600 leading-8'>
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className='py-24 bg-gradient-to-r from-blue-700 to-indigo-800'>

        <div className='container-custom text-center'>

          <h2 className='text-4xl md:text-5xl font-bold text-white'>
            Need Help For Your Services?
          </h2>

          <p className='text-gray-200 mt-8 text-lg leading-8 max-w-3xl mx-auto'>
            Connect with our expert team and let’s
            build powerful digital solutions together.
          </p>

          <button className='mt-10 bg-white text-blue-700 px-10 py-4 rounded-full font-bold hover:scale-105 transition duration-300 shadow-2xl'>
            Contact Us
          </button>

        </div>

      </section>

      <Footer />
    </>
  )
}

export default Services