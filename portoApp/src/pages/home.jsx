import { NavLink } from 'react-router-dom'
import Profile from '../assets/art4.png'
import Slider from 'react-slick'
import Comms1 from '../assets/Comms1.png'
import Comms2 from '../assets/Comms2.png'
import Kamui from '../assets/Kamui.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from '../assets/react.svg'
import Tailwind from '../assets/tailwind-css.svg'
import GoPaint from '../assets/GoPaint.png'
import Figma from '../assets/figma.svg'
import JS from '../assets/js.svg'
import Laravel from '../assets/laravel.svg'
import PHP from '../assets/php.svg'
import VueJS from '../assets/vuejs.svg'
import IbisPaintX from '../assets/ibispaintx.png'

function Home({ darkMode }) {
  const mainBg = darkMode ? 'bg-[var(--darkmode-1)] text-white' : ''
  const sectionBg = darkMode ? 'bg-[var(--darkmode-2)]' : 'bg-[var(--lightmode-cyan)]'
  const textColor = darkMode ? 'text-gray-200' : 'text-gray-700'

  return (
    <main className={`main-content ${mainBg}`}>
      <section className='container flex flex-col md:flex-row items-center gap-10 
      md:gap-16 lg:gap-20 px-4 md:px-6 lg:px-8 
      py-12 md:py-16 lg:py-20 ml-4 md:ml-6 lg:ml-8 
      pt-4 md:pt-6 plus-10 md:plus-16 lg:plus-20 pl-50 md:pl-60 lg:pl-72'>
        <div className='w-full md:w-1/2 text-center md:text-left'>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold space-y-2.5 ${textColor}`}>
            [BETA] Hi, I'm VLO! <br />
            Digital Illustrator & <br /> Web Developer
          </h1>
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl ${textColor} mb-6 md:mb-8 lg:mb-10 pt-4 md:pt-6`}>
            I am a digital illustrator with 12 years of self-taught
            experience, and I have been specialising in web
            programming for the past five years.
          </p>
          <NavLink to="/about" className='inline-block bg-[var(--lightmode-cyan2)] text-white px-6 md:px-8 py-3 rounded hover:bg-[var(--lightmode-red)] transition duration-300 text-sm md:text-base font-semibold'>About Me</NavLink>
        </div>
        <div className='w-full md:w-1/2 flex justify-center'>
          <img src={Profile} alt="Profile" className='w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full shadow-lg' />
        </div>
      </section>

      <section className={`${sectionBg} px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 my-8 md:my-12 ${textColor}`}>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center ${textColor}`}>Skills</h2>
        <div className='container flex flex-wrap justify-center gap-10 md:gap-12 ml-4 md:ml-6 lg:ml-8'>
          <img src={React} alt="React" className='w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-all duration-300 ' />
          <img src={Tailwind} alt="Tailwind CSS" className='w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-all duration-300 bg-white rounded-[125px]  '/>
          <img src={GoPaint} alt="GoPaint" className='w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-all duration-300 ' />
          <img src={IbisPaintX} alt="Ibis Paint X" className='w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-all duration-300 rounded-[125px]' />
          <img src={Figma} alt="Figma" className='w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-all duration-300 ' />
          <img src={JS} alt="JavaScript" className='w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-all duration-300 ' />
          <img src={Laravel} alt="Laravel" className='w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-all duration-300 ' />
          <img src={PHP} alt="PHP" className='w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-all duration-300 ' />
          <img src={VueJS} alt="VueJS" className='w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-all duration-300 ' />
        </div>
      </section>

      <section className={`${sectionBg} px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 my-8 md:my-12 text-center ${textColor}`}>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center ${textColor}`}>Education</h2>

          <h4>
            <span className={`text-lg md:text-xl font-bold mb-3`}>BINUS University</span>
          </h4>
          <div>
            <h5 className={`text-base md:text-lg ${textColor} mb-8 md:mb-10 leading-relaxed`}>2026-2030 | Computer Science</h5>
          </div>
            <p className={`text-base md:text-lg ${textColor} mb-8 leading-relaxed`}>
              I am currently pursuing a Bachelor's degree in Computer Science at BINUS University, <br />
               where I am honing my skills in software development and expanding <br /> my knowledge in various programming languages and technologies.
            </p>
            <p className={`text-base md:text-lg ${textColor} mb-8 leading-relaxed`}>
              My education has provided me with a strong foundation in computer science principles, <br />
               and I am eager to apply what I've learned to real-world projects and continue growing as a developer.
            </p>

            <hr />

            <br />

            <h4>
              <span className={`text-lg md:text-xl font-bold mb-3`}>SMK Metta Maitreya</span>
            </h4>
              <div>
                <h5 className={`text-base md:text-lg ${textColor} mb-8 md:mb-10 leading-relaxed`}>2021-2024 | Computer Networks and Techniques</h5>
              </div>
              <p className={`text-base md:text-lg ${textColor} mb-8 leading-relaxed`}>
                I graduated from SMK Metta Maitreya, majoring in Computer Networks and Techniques, <br />
where I developed foundational skills in computer systems, networking, <br /> and technology-related problem solving.
              </p>
              <p className={`text-base md:text-lg ${textColor} mb-8 leading-relaxed`}>
                My education provided me with a strong understanding of technical concepts, <br />
                and motivated me to continue learning and growing in the field of technology and software development.</p>

      </section>

      <section className={`${sectionBg} px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 my-8 md:my-12 ${textColor}`}>
        <h2 className={`text-3xl font-bold mb-20 text-center ${textColor}`}>My Projects</h2>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center items-stretch'>
          <div className='bg-white rounded-lg shadow-md p-6 flex flex-col h-full'>
            <div>
              <img src={Comms1} alt="Project 1" className='w-full h-auto object-cover rounded mb-4' />
              <h3 className='text-xl font-bold mb-2 text-gray-700'>First Commission</h3>
              <p className='text-gray-700'>Paid Commission for customer</p>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-md p-6 flex flex-col h-full'>
            <div>
              <img src={Comms2} alt="Project 2" className='w-full h-auto object-cover rounded mb-4' />
              <h3 className='text-xl font-bold mb-2 text-gray-700'>Second Commission</h3>
              <p className='text-gray-700'>Paid Commission for customer</p>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-md p-6 flex flex-col h-full'>
            <div>
              <img src={Kamui} alt="Project 3" className='w-full h-auto object-cover rounded mb-4' />
              <h3 className='text-xl font-bold mb-2 text-gray-700'>Kamui - TJ.Hangneil Fanart</h3>
              <p className='text-gray-700'>A digital illustration project.</p>
            </div>
          </div>
          <NavLink to="/projects" className="col-span-full justify-self-center mx-auto bg-[var(--lightmode-red)] text-white px-4 py-2 rounded hover:bg-[var(--lightmode-red)]/90 transition mt-6 md:mt-10 lg:mt-12 text-center inline-block">
            See More
          </NavLink>
        </div>
      </section>

      <footer className={`${sectionBg} p-4 text-center ${textColor} mt-10`}>
        <p>&copy; 2026 Vanessa Lee. All rights reserved.</p>
        <div className='mt-4 flex justify-center gap-4'>
          <a href='https://github.com/RieKou/' target='_blank' rel='noreferrer'>
            <svg className='w-6 h-6 text-gray-500 hover:text-gray-700' fill='currentColor' viewBox='0 0 24 24'>
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href='https://instagram.com/leevnessaa' target='_blank' rel='noreferrer'>
            <svg className='w-6 h-6 text-gray-500 hover:text-gray-700' fill='currentColor' viewBox='0 0 24 24'>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href='https://linktr.ee/' target='_blank' rel='noreferrer'>
            <svg className='w-6 h-6 text-gray-500 hover:text-gray-700' fill='currentColor' viewBox='0 0 24 24'>
              <path d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 0 0 7.07c.39.39.39 1.03 0 1.42-.39.39-1.03.39-1.42 0a2.982 2.982 0 0 1 0-4.24l-3.53 3.53a2.982 2.982 0 0 1 4.24 0zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 0 0-7.07c-.39-.39-.39-1.03 0-1.42.39-.39 1.03-.39 1.42 0a2.982 2.982 0 0 1 0 4.24l3.53-3.53a2.982 2.982 0 0 1-4.24 0z"/>
            </svg>
          </a>
        </div>
      </footer>
    </main>
  )
}

export default Home