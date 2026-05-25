import { useEffect, useState } from 'react'

function Counter({ end }) {

  const [count, setCount] = useState(0)

  useEffect(() => {

    let start = 0

    const duration = 2000
    const incrementTime = 20
    const step = end / (duration / incrementTime)

    const timer = setInterval(() => {

      start += step

      if (start >= end) {
        start = end
        clearInterval(timer)
      }

      setCount(Math.floor(start))

    }, incrementTime)

    return () => clearInterval(timer)

  }, [end])

  return <span>{count}</span>
}

function StatsSection() {

  const stats = [
    {
      number: 120,
      suffix: '+',
      title: 'Projects Completed',
    },

    {
      number: 80,
      suffix: '+',
      title: 'Happy Clients',
    },

    {
      number: 25,
      suffix: '+',
      title: 'Team Members',
    },

    {
      number: 5,
      suffix: '+',
      title: 'Years Experience',
    },
  ]

  return (
    <section data-aos='fade-up' className='py-24 bg-[#0F172A]'>

      <div className='container-custom'>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

          {stats.map((item, index) => (

            <div
              key={index}
              className='bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 text-center hover:-translate-y-3 transition duration-500'
            >

              <h2 className='text-5xl md:text-6xl font-bold text-blue-500 mb-5'>

                <Counter end={item.number} />

                {item.suffix}

              </h2>

              <p className='text-white text-xl font-semibold'>
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default StatsSection