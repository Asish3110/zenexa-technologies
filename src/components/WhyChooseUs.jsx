import {
  FaLaptopCode,
  FaUsers,
  FaRocket,
  FaHeadset,
} from 'react-icons/fa'

function WhyChooseUs() {

  const features = [

    {
      icon: <FaLaptopCode />,
      title: 'Innovative Technology Solutions',
      desc:
        'We build scalable, secure, and future-ready digital solutions using modern technologies and industry best practices.',
    },

    {
      icon: <FaUsers />,
      title: 'Expert & Dedicated Team',
      desc:
        'Our experienced professionals are committed to delivering high-quality services with creativity, precision, and innovation.',
    },

    {
      icon: <FaRocket />,
      title: 'Career Growth & Training',
      desc:
        'We empower students and professionals through internships, practical training, and industry-focused career programs.',
    },

    {
      icon: <FaHeadset />,
      title: 'Reliable Support & Delivery',
      desc:
        'From project planning to deployment, we ensure timely delivery, transparent communication, and continuous support.',
    },

  ]

  return (

    <section className='relative pt-2 pb-24 bg-[#020817] overflow-hidden'>

      {/* Glow Effects */}
      <div className='absolute top-10 left-0 w-[350px] h-[350px] bg-blue-600/20 blur-[120px] rounded-full'></div>

      <div className='absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-600/20 blur-[120px] rounded-full'></div>

      <div className='max-w-[1600px] mx-auto px-4 md:px-8 relative z-20'>

        {/* Heading */}
        <div className='text-center mb-14 pt-6'>

          {/* TITLE */}
          <h2
            className='text-white text-2xl md:text-4xl font-bold mb-2 drop-shadow-[0_0_20px_rgba(59,130,246,0.55)] hover:scale-105 transition duration-500'
            data-aos='zoom-in'
            data-aos-duration='1200'
          >

            Why Choose Us

          </h2>

          {/* PARAGRAPH */}
          <p
            className='text-gray-400 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration='1200'
            data-aos-delay='300'
          >

            We provide innovative IT solutions, industry-focused training,
            and career opportunities that help businesses and individuals
            grow successfully in the modern digital world.

          </p>

        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

          {features.map((item, index) => (

            <div
              key={index}
              className='group bg-white rounded-3xl p-8 text-center transition duration-500 hover:-translate-y-5 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]'
              data-aos='zoom-in-up'
              data-aos-delay={index * 150}
            >

              {/* Icon */}
              <div className='w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-4xl mb-6 shadow-[0_0_25px_rgba(99,102,241,0.45)] group-hover:bg-white group-hover:text-blue-600 group-hover:scale-110 transition duration-500'>

                {item.icon}

              </div>

              {/* Title */}
              <h3 className='text-[#020817] group-hover:text-white text-2xl font-bold mb-4 transition duration-500'>

                {item.title}

              </h3>

              {/* Description */}
              <p className='text-gray-600 group-hover:text-gray-200 leading-relaxed text-[15px] transition duration-500'>

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default WhyChooseUs