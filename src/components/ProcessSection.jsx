import {
  Search,
  ClipboardList,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
} from 'lucide-react'

function ProcessSection() {

  const processSteps = [

    {
      icon: <Search size={34} />,
      title: 'Discovery',
      description:
        'We analyze your business goals, understand project requirements, and identify the best technology solutions for long-term success.',
    },

    {
      icon: <ClipboardList size={34} />,
      title: 'Planning',
      description:
        'Our team creates a strategic roadmap, scalable architecture, and execution plan to ensure smooth development.',
    },

    {
      icon: <PenTool size={34} />,
      title: 'Design',
      description:
        'We craft modern and intuitive UI/UX designs focused on engagement, performance, and seamless user experience.',
    },

    {
      icon: <Code2 size={34} />,
      title: 'Development',
      description:
        'Using modern technologies, we build secure, scalable, and high-performance applications tailored to your needs.',
    },

    {
      icon: <ShieldCheck size={34} />,
      title: 'Testing',
      description:
        'Every solution undergoes strict testing and quality assurance to ensure reliability, security, and flawless functionality.',
    },

    {
      icon: <Rocket size={34} />,
      title: 'Deployment',
      description:
        'We launch your product with optimization, monitoring, and continuous support to ensure long-term growth.',
    },

  ]

  return (

    <section className='w-full bg-[#020817] py-20 overflow-hidden'>

      <div className='max-w-7xl mx-auto px-4 md:px-8'>

        {/* Small Heading */}
        <p
          className='text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-sm md:text-base tracking-[4px] uppercase mb-2 font-semibold'
          data-aos='fade-up'
        >

          How We Work

        </p>

        {/* Main Heading */}
        <h2
          className='text-center text-white text-4xl md:text-5xl font-bold mb-16'
          data-aos='zoom-in'
        >

          Our Development Process

        </h2>

        {/* Timeline */}
        <div className='relative'>

          {/* Glow Line */}
          <div className='hidden lg:block absolute top-1/2 left-0 w-full h-[3px] bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 opacity-40'></div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10'>

            {processSteps.map((step, index) => (

              <div
                key={index}
                data-aos={index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'}
                className='group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-3 transition duration-500 overflow-hidden'
              >

                {/* Glow Effect */}
                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-purple-500/10'></div>

                {/* Step Number */}
                <div className='absolute top-5 right-6 text-white/10 text-6xl font-bold'>

                  0{index + 1}

                </div>

                {/* Icon */}
                <div className='relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-[0_0_25px_rgba(99,102,241,0.45)] mb-6 group-hover:scale-110 transition duration-500'>

                  {step.icon}

                </div>

                {/* Title */}
                <h3 className='relative z-10 text-white text-2xl font-semibold mb-4'>

                  {step.title}

                </h3>

                {/* Description */}
                <p className='relative z-10 text-gray-300 leading-[30px] text-[16px]'>

                  {step.description}

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  )
}

export default ProcessSection