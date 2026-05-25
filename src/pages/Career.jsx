// Career.jsx

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import careerHero from '../assets/images/career-hero-2.jpg'
import teamImg from '../assets/images/team.jpg'
import applyImg from '../assets/images/apply.png'

function Career() {

  const openings = [

    {
      title: 'Frontend Developer',
      type: 'Full Time',
      mode: 'Onsite',
      desc: 'React.js developer with strong UI/UX understanding and modern frontend development experience.',
    },

    {
      title: 'Backend Developer',
      type: 'Full Time',
      mode: 'Remote',
      desc: 'Node.js developer with API development and database management experience.',
    },

    {
      title: 'UI/UX Designer',
      type: 'Internship',
      mode: 'Remote',
      desc: 'Creative designer with Figma, design systems, and user experience knowledge.',
    },

    {
      title: 'Data Analyst Intern',
      type: 'Internship',
      mode: 'Remote',
      desc: 'Excel, SQL, Python, and dashboard development knowledge preferred.',
    },

    {
      title: 'AI/ML Engineer',
      type: 'Full Time',
      mode: 'Onsite',
      desc: 'Work on intelligent AI-powered systems, machine learning models, and automation solutions.',
    },

    {
      title: 'Digital Marketing Executive',
      type: 'Full Time',
      mode: 'Hybrid',
      desc: 'Manage digital campaigns, branding strategies, SEO, and social media growth.',
    },
    
  ]

  return (

    <>

      <Navbar />

      <div className='w-full bg-[#020817] overflow-hidden'>

{/* ================================================= */}
{/* HERO SECTION */}
{/* ================================================= */}

<section className='relative w-full h-[70vh] overflow-hidden'>

  {/* ================================================= */}
  {/* BACKGROUND IMAGE */}
  {/* ================================================= */}

  <img
    src={careerHero}
    alt='Careers'
    className='absolute inset-0 w-full h-full object-cover'
  />

  {/* ================================================= */}
  {/* DARK OVERLAY */}
  {/* ================================================= */}

  <div className='absolute inset-0 bg-[#020817]/50'></div>

  {/* ================================================= */}
  {/* GRADIENT OVERLAY */}
  {/* ================================================= */}

  <div className='absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/30 to-transparent'></div>

  {/* ================================================= */}
  {/* CONTENT */}
  {/* ================================================= */}

  <div className='relative z-10 h-full flex items-start justify-center text-center px-4 md:px-8 pt-[100px] md:pt-[130px]'>

    <div className='max-w-5xl'>

      <p className='text-cyan-400 uppercase tracking-[4px] text-[13px] md:text-[15px] mb-5 font-semibold'>

        Careers

      </p>

      <h1 className='text-white text-[24px] sm:text-[34px] md:text-[48px] font-bold leading-[1.1] mb-7'>

        Build your future with

        <span className='block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 text-[22px] sm:text-[30px] md:text-[42px] leading-[1.2] pb-2'>

          Zenexa Technologies

        </span>

      </h1>

      <p className='text-gray-300 text-[15px] md:text-[19px] leading-[34px] md:leading-[38px] max-w-4xl mx-auto'>

        Work on impactful digital solutions, collaborate with innovative minds,
        and grow your career in a technology-driven environment focused on
        creativity, learning, and innovation.

      </p>

    </div>

  </div>

</section>

{/* ================================================= */}
{/* JOIN OUR TEAM SECTION */}
{/* ================================================= */}

<section className='w-full py-14 md:py-20 overflow-hidden'>

  <div className='max-w-[1450px] mx-auto px-4 md:px-10'>

    <div className='grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center'>

      {/* ================================================= */}
      {/* LEFT CONTENT */}
      {/* ================================================= */}

      <div className='max-w-xl -mt-10 md:-mt-16 text-center lg:text-left'>

        {/* JOIN OUR TEAM */}

        <p
          className='text-cyan-400 uppercase tracking-[3px] text-[14px] md:text-[16px] font-semibold mb-4'
          data-aos='fade-right'
          data-aos-duration='900'
        >

          Join Our Team

        </p>

        {/* MAIN HEADING */}

        <h2
        className='text-white text-[19px] sm:text-[24px] md:text-[28px] font-bold leading-[1.15] mb-5 whitespace-nowrap overflow-hidden animate-typing mx-auto lg:mx-0'
        >

          Shape The Future With Innovation

        </h2>

        {/* PARAGRAPH */}

        <p
          className='text-gray-300 text-[15px] md:text-[16px] leading-[29px] mb-5'
          data-aos='fade-up'
          data-aos-delay='200'
        >

          We are looking for passionate individuals who love technology,
          innovation, and solving real-world problems. Join a team where
          creativity, collaboration, and continuous learning drive everything
          we build.

        </p>

        <p
          className='text-gray-300 text-[15px] md:text-[16px] leading-[29px] mb-7'
          data-aos='fade-up'
          data-aos-delay='300'
        >

          At Zenexa Technologies, you’ll work on impactful digital solutions,
          collaborate with talented professionals, and explore opportunities
          that help shape your long-term career journey in the tech industry.

        </p>

        {/* ================================================= */}
        {/* FEATURE CARDS */}
        {/* ================================================= */}

        <div className='space-y-4'>

          {/* CARD 1 */}

          <div
            className='bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-5 py-4 flex items-center gap-4 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-500'
            data-aos='fade-right'
            data-aos-delay='400'
          >

            <div className='w-[52px] h-[52px] rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl flex-shrink-0'>

              💼

            </div>

            <div>

              <h4 className='text-white text-[16px] font-semibold mb-1'>

                Competitive Salary

              </h4>

              <p className='text-gray-400 text-[14px] leading-[24px]'>

                Performance-driven growth and rewarding opportunities.

              </p>

            </div>

          </div>

          {/* CARD 2 */}

          <div
            className='bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-5 py-4 flex items-center gap-4 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-500'
            data-aos='fade-right'
            data-aos-delay='500'
          >

            <div className='w-[52px] h-[52px] rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl flex-shrink-0'>

              🌍

            </div>

            <div>

              <h4 className='text-white text-[16px] font-semibold mb-1'>

                Remote Opportunities

              </h4>

              <p className='text-gray-400 text-[14px] leading-[24px]'>

                Flexible work culture with collaborative teamwork.

              </p>

            </div>

          </div>

          {/* CARD 3 */}

          <div
            className='bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-5 py-4 flex items-center gap-4 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-500'
            data-aos='fade-right'
            data-aos-delay='600'
          >

            <div className='w-[52px] h-[52px] rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl flex-shrink-0'>

              🚀

            </div>

            <div>

              <h4 className='text-white text-[16px] font-semibold mb-1'>

                Career Development

              </h4>

              <p className='text-gray-400 text-[14px] leading-[24px]'>

                Learn modern technologies and grow with mentorship.

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* RIGHT IMAGE */}
      {/* ================================================= */}

      <div
        className='relative flex justify-center lg:justify-end -mt-10 md:-mt-16'
        data-aos='fade-left'
      >

        <div
          className='relative w-full max-w-[780px] h-[500px] md:h-[560px] rounded-[28px] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(34,211,238,0.08)] group'
          data-aos='zoom-in'
          data-aos-delay='300'
        >

          <img
            src={teamImg}
            alt='Join Our Team'
            className='w-full h-full object-cover group-hover:scale-105 transition duration-[2000ms]'
          />

          <div className='absolute inset-0 bg-gradient-to-t from-[#020817]/40 to-transparent'></div>

        </div>

      </div>

    </div>

  </div>

</section>

        {/* ================================================= */}
        {/* CURRENT OPENINGS */}
        {/* ================================================= */}

        <section className='w-full py-20 md:py-28 bg-[#07101F]'>

          <div className='max-w-[1500px] mx-auto px-4 md:px-10'>

            {/* Heading */}
            <div className='text-center mb-20'>

              <p className='text-cyan-400 uppercase tracking-[4px] text-sm font-semibold mb-4'>

                Current Openings

              </p>

              <h2 className='text-white text-[34px] md:text-[56px] font-bold leading-[1.1] mb-6'>

                Explore Career Opportunities

              </h2>

              <p className='text-gray-300 text-[16px] md:text-[18px] max-w-3xl mx-auto leading-[34px]'>

                Discover exciting opportunities to grow your career, work on innovative
                projects, and become part of a forward-thinking technology team.

              </p>

            </div>

            {/* Cards */}
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8'>

              {openings.map((job, index) => (

                <div
                  key={index}
                  className='relative bg-white rounded-[26px] p-8 overflow-hidden group hover:-translate-y-3 transition duration-500 shadow-xl'
                >

                  {/* Left Gradient Line */}
                  <div className='absolute left-0 top-0 h-full w-[6px] bg-gradient-to-b from-cyan-400 to-blue-600'></div>

                  {/* Hover Glow */}
                  <div className='absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition duration-500'></div>

                  <div className='relative z-10'>

                    <div className='flex flex-wrap gap-3 mb-5'>

                      <span className='bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold'>
                        {job.type}
                      </span>

                      <span className='bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold'>
                        {job.mode}
                      </span>

                    </div>

                    <h3 className='text-[28px] font-bold text-[#020817] mb-4'>

                      {job.title}

                    </h3>

                    <p className='text-gray-600 leading-[30px] mb-8'>

                      {job.desc}

                    </p>

                    <button
                      onClick={() =>
                        document
                          .getElementById('apply-form')
                          .scrollIntoView({ behavior: 'smooth' })
                      }
                      className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300'
                    >

                      Apply Now

                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ================================================= */}
        {/* APPLY FORM */}
        {/* ================================================= */}

        <section
          id='apply-form'
          className='w-full py-20 md:py-28'
        >

          <div className='max-w-[1500px] mx-auto px-4 md:px-10'>

            <div className='grid lg:grid-cols-2 overflow-hidden rounded-[36px] border border-white/10'>

              {/* LEFT IMAGE */}
              <div className='bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center p-10 md:p-16'>

                <img
                  src={applyImg}
                  alt='Apply'
                  className='w-full max-w-[420px]'
                />

              </div>

              {/* RIGHT FORM */}
              <div className='bg-white p-8 md:p-14'>

                <div className='mb-12'>

                  <p className='text-cyan-600 uppercase tracking-[4px] text-sm font-semibold mb-4'>

                    Apply Now

                  </p>

                  <h2 className='text-[#020817] text-[34px] md:text-[48px] font-bold leading-[1.1]'>

                    Submit Your Application

                  </h2>

                </div>

                <form className='grid md:grid-cols-2 gap-7'>

                  <div>

                    <label className='block mb-3 font-semibold text-[#020817]'>
                      Full Name
                    </label>

                    <input
                      type='text'
                      required
                      placeholder='Enter your full name'
                      className='w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500'
                    />

                  </div>

                  <div>

                    <label className='block mb-3 font-semibold text-[#020817]'>
                      Email Address
                    </label>

                    <input
                      type='email'
                      required
                      placeholder='Enter your email'
                      className='w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500'
                    />

                  </div>

                  <div>

                    <label className='block mb-3 font-semibold text-[#020817]'>
                      Phone Number
                    </label>

                    <input
                      type='text'
                      required
                      placeholder='Enter your phone number'
                      className='w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500'
                    />

                  </div>

                  <div>

                    <label className='block mb-3 font-semibold text-[#020817]'>
                      Position
                    </label>

                    <input
                      type='text'
                      required
                      placeholder='Enter position'
                      className='w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500'
                    />

                  </div>

                  <div className='md:col-span-2'>

                    <label className='block mb-3 font-semibold text-[#020817]'>
                      Upload Resume
                    </label>

                    <input
                      type='file'
                      required
                      className='w-full border border-gray-300 rounded-2xl px-5 py-4'
                    />

                  </div>

                  <div className='md:col-span-2'>

                    <label className='block mb-3 font-semibold text-[#020817]'>
                      Message
                    </label>

                    <textarea
                      rows='6'
                      placeholder='Write your message'
                      className='w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500'
                    ></textarea>

                  </div>

                  <div className='md:col-span-2'>

                    <button
                      type='submit'
                      className='w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-2xl font-bold hover:scale-[1.02] transition duration-300 shadow-xl'
                    >

                      Submit Application

                    </button>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </section>

        <Footer />

      </div>

    </>

  )
}

export default Career