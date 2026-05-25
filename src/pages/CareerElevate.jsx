// CareerElevate.jsx

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import heroImg from '../assets/images/career-hero.jpg'
import internshipImg from '../assets/images/internship.jpg'
import jobImg from '../assets/images/job-hunting.jpg'
import resumeImg from '../assets/images/resume.jpg'

function CareerElevate() {

  return (

    <>

      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

        <Navbar />

      <div className='w-full bg-[#020817] overflow-hidden pt-[0px]'>

{/* ================================================= */}
{/* HERO SECTION */}
{/* ================================================= */}

<section className='relative w-full h-[90vh] overflow-hidden'>

  {/* ================================================= */}
  {/* BACKGROUND IMAGE */}
  {/* ================================================= */}

  <img
    src={heroImg}
    alt='Career Elevate'
className='absolute inset-0 w-full h-full object-cover md:object-cover'  />

  {/* ================================================= */}
  {/* DARK OVERLAY */}
  {/* ================================================= */}

 <div className='absolute inset-0 bg-[#020817]/45'></div>

  {/* ================================================= */}
  {/* GRADIENT OVERLAY */}
  {/* ================================================= */}

  <div className='absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/40 to-transparent'></div>

  {/* ================================================= */}
  {/* CONTENT */}
  {/* ================================================= */}

 <div className='relative z-10 h-full flex items-start justify-center text-center px-4 md:px-8 pt-[110px] md:pt-[160px]'>

    <div className='max-w-5xl'>

    <h1 className='text-white text-[24px] sm:text-[30px] md:text-[40px] font-bold leading-[1.18] md:leading-[1.1] mb-6 md:mb-8'>

  <span className='block'>
    TAKE YOUR NEXT BIG STEP TOWARDS
  </span>

  <span className='block md:mt-2'>
    A REWARDING CAREER
  </span>

</h1>

      <p className='text-gray-300 text-[15px] md:text-[19px] leading-[34px] md:leading-[38px] max-w-4xl mx-auto'>

        Career Elevate by Zenexa Technologies is designed to help students,
        graduates, and professionals accelerate their career journey with
        the right guidance, opportunities, and industry-focused support.
        From internships and placement assistance to resume optimization
        and career mentorship, we provide practical solutions that help
        individuals stand out in today’s competitive job market.

      </p>

    </div>

  </div>

</section>

{/* ================================================= */}
{/* INTERNSHIP SECTION */}
{/* DESKTOP: TEXT - IMAGE */}
{/* MOBILE: TEXT - IMAGE */}
{/* ================================================= */}

<section className='w-full py-16 md:py-24 overflow-hidden'>

  <div className='max-w-[1500px] mx-auto px-4 md:px-10'>

    <div className='grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center'>

      {/* TEXT */}
      <div
        className='max-w-xl order-1'
        data-aos='fade-right'
      >

        <p className='text-cyan-400 uppercase tracking-[3px] text-[15px] md:text-xl font-semibold mb-4'>

          Internship Program

        </p>

        <h2 className='text-white text-[26px] sm:text-[30px] md:text-[34px] font-bold leading-[1.15] mb-3 whitespace-nowrap'>

          Looking for an Internship ?

        </h2>

        <p className='text-gray-300 text-[15px] md:text-[17px] leading-[34px] mb-9'>

          Gain real-world industry exposure through structured internship
          programs designed to improve your practical skills, confidence,
          and professional experience.

        </p>

        <button className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-7 py-3 rounded-xl font-semibold'>

          Know More

        </button>

      </div>

      {/* IMAGE */}
      <div
        className='relative flex justify-center lg:justify-end order-2'
        data-aos='fade-left'
      >

        <div className='relative w-full max-w-[960px] h-[430px] md:h-[400px] rounded-[20px] overflow-hidden border border-white/10 group'>

          <img
            src={internshipImg}
            alt='Internship'
            className='w-full h-full object-cover group-hover:scale-105 transition duration-[2000ms]'
          />

        </div>

      </div>

    </div>

  </div>

</section>




{/* ================================================= */}
{/* JOB HUNTING SECTION */}
{/* ================================================= */}

<section className='w-full py-16 md:py-24 overflow-hidden'>

  <div className='max-w-[1500px] mx-auto px-4 md:px-10'>

    <div className='grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center'>

      {/* ================================================= */}
      {/* LEFT IMAGE */}
      {/* ================================================= */}

      <div
        className='relative flex justify-center lg:justify-start order-1'
        data-aos='fade-right'
      >

        {/* Glow Effect */}
        <div className='absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full left-0'></div>

        {/* Image Card */}
        <div className='relative w-full max-w-[960px] h-[430px] md:h-[400px] rounded-[20px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(34,211,238,0.08)] group'>

          <img
            src={jobImg}
            alt='Job Hunting'
            className='w-full h-full object-cover group-hover:scale-105 transition duration-[2000ms]'
          />

          {/* Overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-[#020817]/40 to-transparent'></div>

        </div>

      </div>

      {/* ================================================= */}
      {/* RIGHT CONTENT */}
      {/* ================================================= */}

      <div
        className='max-w-xl order-2 lg:ml-auto'
        data-aos='fade-left'
      >

        <p className='text-cyan-400 uppercase tracking-[3px] text-[15px] md:text-xl font-semibold mb-4'>

          Full Time Job Assistance Program

        </p>

        <h2 className='text-white text-[26px] sm:text-[30px] md:text-[34px] font-bold leading-[1.15] mb-3'>

          Making Full Time Job Hunting Easier, Faster and More Effective.

        </h2>

        <p className='text-gray-300 text-[15px] md:text-[17px] leading-[34px] mb-9'>

          We help candidates simplify their job search journey with career
          guidance, interview preparation, professional networking support,
          and access to opportunities that align with their skills and goals.

        </p>

        <button className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-7 py-3 rounded-xl font-semibold border-none hover:scale-105 transition duration-500 shadow-[0_0_30px_rgba(34,211,238,0.30)]'>

          Know More

        </button>

      </div>

    </div>

  </div>

</section>





{/* ================================================= */}
{/* RESUME SECTION */}
{/* ================================================= */}

<section className='w-full py-16 md:py-24 overflow-hidden'>

  <div className='max-w-[1500px] mx-auto px-4 md:px-10'>

    <div className='grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center'>

      {/* ================================================= */}
      {/* LEFT CONTENT */}
      {/* ================================================= */}

      <div
        className='max-w-xl'
        data-aos='fade-right'
      >

        <p className='text-cyan-400 uppercase tracking-[3px] text-[15px] md:text-xl font-semibold mb-4'>

          Resume Building

        </p>

        <h2 className='text-white text-[26px] sm:text-[30px] md:text-[34px] font-bold leading-[1.15] mb-3 whitespace-nowrap'>

          Let Your Resume Speak for You.

        </h2>

        <p className='text-gray-300 text-[15px] md:text-[17px] leading-[34px] mb-9'>

          Create ATS-friendly and professionally designed resumes that
          effectively showcase your strengths, achievements, and technical
          expertise while increasing your chances of getting shortlisted.

        </p>

        <button className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-7 py-3 rounded-xl font-semibold border-none hover:scale-105 transition duration-500 shadow-[0_0_30px_rgba(34,211,238,0.30)]'>

          Know More

        </button>

      </div>

      {/* ================================================= */}
      {/* RIGHT IMAGE */}
      {/* ================================================= */}

      <div
        className='relative flex justify-center lg:justify-end'
        data-aos='fade-left'
      >

        {/* Glow Effect */}
        <div className='absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full right-0'></div>

        {/* Image Card */}
        <div className='relative w-full max-w-[960px] h-[430px] md:h-[400px] rounded-[20px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(34,211,238,0.08)] group'>

          <img
            src={resumeImg}
            alt='Resume Building'
            className='w-full h-full object-cover group-hover:scale-105 transition duration-[2000ms]'
          />

          {/* Overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-[#020817]/40 to-transparent'></div>

        </div>

      </div>

    </div>

  </div>

</section>

        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <Footer />

      </div>

    </>

  )
}

export default CareerElevate