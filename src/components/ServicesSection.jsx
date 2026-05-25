import webImg from '../assets/images/web-development.jpg'
import appImg from '../assets/images/app-development.jpg'
import aiImg from '../assets/images/ai-ml.jpg'
import dataImg from '../assets/images/data-analytics.jpg'
import uiuxImg from '../assets/images/uiux.jpg'
import trainingImg from '../assets/images/training.jpg'

function ServicesSection() {

  const services = [

    {
      title: 'Web Development',

      desc:
        'We create modern, scalable, and high-performing websites tailored for startups, enterprises, and growing businesses using the latest web technologies and frameworks. Our solutions focus on speed, security, responsiveness, and user experience to help brands establish a powerful digital presence.',

      image: webImg,
    },

    {
      title: 'App Development',

      desc:
        'Custom Android, iOS, and cross-platform mobile applications designed for scalability, performance, and seamless user experience. We develop intuitive mobile solutions that enhance customer engagement and deliver exceptional performance.',

      image: appImg,
    },

    {
      title: 'AI / ML Solutions',

      desc:
        'Intelligent AI and Machine Learning solutions that automate processes, improve efficiency, and drive smarter business decisions. We help organizations leverage AI technologies to unlock innovation and future-ready transformation.',

      image: aiImg,
    },

    {
      title: 'Data Analytics',

      desc:
        'Advanced data analytics and visualization services that transform raw data into actionable insights for business growth. We help businesses analyze trends and make strategic decisions through modern analytics solutions.',

      image: dataImg,
    },

    {
      title: 'UI / UX Designing',

      desc:
        'Creative and user-focused UI/UX designs that deliver modern, engaging, and intuitive digital experiences across all devices with visually stunning interfaces and better usability.',

      image: uiuxImg,
    },

    {
      title: 'Internship & Training',

      desc:
        'Industry-oriented internships and practical training programs that help students and professionals build real-world tech skills with hands-on learning and mentorship.',

      image: trainingImg,
    },

  ]

  return (

    <section className='relative w-full pt-10 pb-20 bg-[#020817] overflow-hidden'>

      {/* Background Glow */}
      <div className='absolute top-0 left-0 w-[350px] h-[350px] bg-blue-600/20 blur-[120px] rounded-full'></div>

      <div className='absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-600/20 blur-[120px] rounded-full'></div>

      <div className='w-full px-4 md:px-10 lg:px-16 relative z-10'>

        {/* Section Heading */}
        <div className='text-center mb-16'>

          <h2
            className='text-white text-3xl md:text-4xl font-bold mb-2'
            data-aos='zoom-in'
          >

            Our Services

          </h2>

          <p
            className='text-gray-400 text-lg md:text-xl leading-[1.9] max-w-6xl mx-auto'
            data-aos='fade-up'
          >

            Empowering businesses with cutting-edge technology, our comprehensive software solutions encompass development, UI/UX designing, AI innovation, consulting, and technical support. We specialize in building scalable digital experiences tailored to diverse business needs while ensuring innovation, performance, and long-term growth.

          </p>

        </div>

        {/* Services */}
        <div className='flex flex-col gap-16'>

          {services.map((service, index) => (

            <div
              key={index}
              className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10'
            >

              {/* TEXT SIDE */}
              <div
                className={`flex flex-col justify-center h-full ${
                  index % 2 !== 0 ? 'lg:order-2' : ''
                }`}
                data-aos={
                  index % 2 === 0
                    ? 'fade-right'
                    : 'zoom-out-left'
                }
              >

                <h3 className='text-white text-3xl md:text-4xl font-bold'>

                  {service.title}

                </h3>

                <div className='w-36 h-[3px] bg-gradient-to-r from-blue-500 to-transparent rounded-full mt-3 mb-6'></div>

                <p className='text-gray-400 text-lg leading-[1.9] max-w-[650px]'>

                  {service.desc}

                </p>

              </div>

              {/* IMAGE SIDE */}
              <div
                className={`w-full flex justify-center ${
                  index % 2 !== 0 ? 'lg:order-1' : ''
                }`}
                data-aos={
                  index % 2 === 0
                    ? 'fade-left'
                    : 'zoom-out-right'
                }
              >

                <img
                  src={service.image}
                  alt={service.title}
                  className='w-full max-w-[650px] h-[380px] object-cover rounded-[30px] shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:scale-[1.03] transition duration-500'
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default ServicesSection