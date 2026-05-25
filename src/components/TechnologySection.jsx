// TechnologySection.jsx

import { useState } from 'react'

/* FRONTEND */
import htmlLogo from '../assets/tech/Html.png'
import cssLogo from '../assets/tech/css.png'
import reactLogo from '../assets/tech/react.png'
import nextjsLogo from '../assets/tech/next-js.svg'
import tailwindLogo from '../assets/tech/tailwindcss.png'
import jsLogo from '../assets/tech/javascript.png'
import tsLogo from '../assets/tech/typescript.svg'
import angularLogo from '../assets/tech/Angular.png'
import bootstrapLogo from '../assets/tech/bootstrap.png'
import vueLogo from '../assets/tech/veu.png'

/* BACKEND */
import nodeLogo from '../assets/tech/NodeJS.svg'
import expressLogo from '../assets/tech/express.png'
import pythonLogo from '../assets/tech/Python.svg'
import javaLogo from '../assets/tech/Java.svg'
import djangoLogo from '../assets/tech/django.svg'

/* DATABASE */
import mysqlLogo from '../assets/tech/mySql.svg'
import mongoLogo from '../assets/tech/mongodb.svg'
import postgresLogo from '../assets/tech/postgresql.png'
import oracleLogo from '../assets/tech/oracle.png'

/* AI ML */
import aiPythonLogo from '../assets/tech/Python.svg'
import tensorflowLogo from '../assets/tech/tensorflow.svg'
import pytorchLogo from '../assets/tech/pytorch.svg'
import openaiLogo from '../assets/tech/openai.svg'
import sklearnLogo from '../assets/tech/scikitlearn.svg'
import pandasLogo from '../assets/tech/pandas.png'
import numpyLogo from '../assets/tech/numpy.svg'
import jupyterLogo from '../assets/tech/jupyter.svg'

/* CLOUD */
import awsLogo from '../assets/tech/aws.png'
import vercelLogo from '../assets/tech/vercel.svg'
import gcpLogo from '../assets/tech/googlecloud.svg'
import firebaseLogo from '../assets/tech/firebase.svg'

/* DEVOPS */
import dockerLogo from '../assets/tech/docker.png'
import kubernetesLogo from '../assets/tech/kubernetes.png'
import githubLogo from '../assets/tech/github.svg'
import jenkinsLogo from '../assets/tech/jenkins.svg'

function TechnologySection() {

  const [activeTab, setActiveTab] = useState('Frontend')

  const technologies = {

    Frontend: [
      htmlLogo,
      cssLogo,
      reactLogo,
      nextjsLogo,
      tailwindLogo,
      jsLogo,
      tsLogo,
      angularLogo,
      bootstrapLogo,
      vueLogo,
    ],

    Backend: [
      nodeLogo,
      expressLogo,
      pythonLogo,
      javaLogo,
      djangoLogo,
    ],

    Databases: [
      mysqlLogo,
      mongoLogo,
      postgresLogo,
      oracleLogo,
    ],

    'AI/ML': [
      aiPythonLogo,
      tensorflowLogo,
      pytorchLogo,
      openaiLogo,
      sklearnLogo,
      pandasLogo,
      numpyLogo,
      jupyterLogo,
    ],

    Cloud: [
      awsLogo,
      vercelLogo,
      gcpLogo,
      firebaseLogo,
    ],

    DevOps: [
      dockerLogo,
      kubernetesLogo,
      githubLogo,
      jenkinsLogo,
    ],

  }

  const tabs = [
    'Frontend',
    'Backend',
    'Databases',
    'AI/ML',
    'Cloud',
    'DevOps',
  ]

  return (

    <section className='w-full bg-white py-14 md:py-10 overflow-hidden'>

      <div className='max-w-7xl mx-auto px-4 md:px-8'>

        {/* Small Heading */}
        <p
          className='text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-sm md:text-base tracking-[4px] uppercase mb-4 font-semibold'
        >

          Technology Use

        </p>

        {/* Main Heading */}
        <h2
          className='text-center text-[#0f172a] text-3xl md:text-5xl font-bold mb-8'
          data-aos='zoom-in'
        >

          Our Tech Stack

        </h2>

        {/* Buttons */}
        {/* Buttons */}
        <div
          className='grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap justify-center gap-3 md:gap-4 mb-16 max-w-[500px] md:max-w-full mx-auto'
          data-aos='fade-up'
        >

  {tabs.map((tab, index) => (

    <button
      key={index}
      onClick={() => setActiveTab(tab)}
      className={`px-4 md:px-7 py-2.5 md:py-3 rounded-xl text-sm md:text-lg font-medium transition-all duration-300 ${
        activeTab === tab
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_25px_rgba(99,102,241,0.35)] scale-105'
          : 'bg-[#f4f7fb] text-[#0f172a] hover:bg-blue-100 border border-gray-200'
      }`}
    >

      {tab}

    </button>

  ))}

</div>

        {/* Tech Logos */}
        <div
          className='flex flex-col items-center mt-10'
          data-aos='zoom-in'
        >

          {/* Row 1 */}
          <div className='flex flex-wrap justify-center gap-6 md:gap-14'>

            {technologies[activeTab].slice(0, 5).map((logo, index) => (

              <div
                key={index}
                className='group animate-[dropDown_7s_ease-in-out_infinite]'
                style={{
                  animationDelay: `${index * 0.25}s`,
                }}
              >

                <img
                  src={logo}
                  alt='tech-logo'
                  className={`
                    object-contain transition duration-500 group-hover:scale-125

                    ${
                      activeTab === 'Frontend'
                        ? 'w-[52px] md:w-[75px]'

                        : logo === nodeLogo ||
                          logo === expressLogo ||
                          logo === pythonLogo ||
                          logo === javaLogo ||
                          logo === dockerLogo ||
                          logo === mongoLogo ||
                          logo === oracleLogo ||
                          logo === mysqlLogo
                        ? 'w-[95px] md:w-[135px]'

                        : 'w-[78px] md:w-[110px]'
                    }
                  `}
                />

              </div>

            ))}

          </div>

          {/* Row 2 */}
          <div className='flex flex-wrap justify-center gap-6 md:gap-14 mt-8 ml-6 md:ml-16'>

            {technologies[activeTab].slice(5, 9).map((logo, index) => (

              <div
                key={index}
                className='group animate-[dropUp_7s_ease-in-out_infinite]'
                style={{
                  animationDelay: `${index * 0.3}s`,
                }}
              >

                <img
                  src={logo}
                  alt='tech-logo'
                  className={`
                    object-contain transition duration-500 group-hover:scale-125

                    ${
                      activeTab === 'Frontend'
                        ? 'w-[52px] md:w-[75px]'

                        : logo === nodeLogo ||
                          logo === expressLogo ||
                          logo === pythonLogo ||
                          logo === javaLogo ||
                          logo === dockerLogo ||
                          logo === mongoLogo ||
                          logo === oracleLogo ||
                          logo === mysqlLogo
                        ? 'w-[95px] md:w-[135px]'

                        : 'w-[78px] md:w-[110px]'
                    }
                  `}
                />

              </div>

            ))}

          </div>

          {/* Row 3 */}
          <div className='flex flex-wrap justify-center gap-6 md:gap-14 mt-8'>

            {technologies[activeTab].slice(9, 12).map((logo, index) => (

              <div
                key={index}
                className='group animate-[dropDown_7s_ease-in-out_infinite]'
                style={{
                  animationDelay: `${index * 0.35}s`,
                }}
              >

                <img
                  src={logo}
                  alt='tech-logo'
                  className={`
                    object-contain transition duration-500 group-hover:scale-125

                    ${
                      activeTab === 'Frontend'
                        ? 'w-[52px] md:w-[75px]'

                        : logo === nodeLogo ||
                          logo === expressLogo ||
                          logo === pythonLogo ||
                          logo === javaLogo ||
                          logo === dockerLogo ||
                          logo === mongoLogo ||
                          logo === oracleLogo ||
                          logo === mysqlLogo
                        ? 'w-[95px] md:w-[135px]'

                        : 'w-[78px] md:w-[110px]'
                    }
                  `}
                />

              </div>

            ))}

          </div>

          {/* Row 4 */}
          <div className='flex justify-center mt-8'>

            {technologies[activeTab].slice(12, 13).map((logo, index) => (

              <div
                key={index}
                className='group animate-[dropUp_7s_ease-in-out_infinite]'
              >

                <img
                  src={logo}
                  alt='tech-logo'
                  className='w-[90px] md:w-[120px] object-contain transition duration-500 group-hover:scale-125'
                />

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  )
}

export default TechnologySection