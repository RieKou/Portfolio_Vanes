import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  const mainBg = darkMode ? 'bg-[var(--darkmode-1)] text-white' : ''
  const textColor = darkMode ? 'text-gray-200' : 'text-gray-700'
  const navBg = darkMode ? 'bg-[var(--darkmode-2)]' : 'bg-[var(--lightmode-cyan)]'
  const toggleBg = darkMode ? 'bg-white/10 hover:bg-white/20 text-gray-200' : 'bg-black/10 hover:bg-black/20 text-gray-900'
  const linkColor = darkMode ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-gray-900'
  const activeLinkStyle = 'text-white bg-[var(--lightmode-red)] px-3 py-2 rounded-[25px] font-bold'

  const getLinkClass = ({ isActive }) => 
    isActive ? activeLinkStyle : linkColor

  return (
    <main className={`main-content ${mainBg}`}>
      <section className={`${navBg} px-4 md:px-6 py-4 shadow-md sticky top-0 z-50`}>
        <header className='max-w-7xl mx-auto flex items-center justify-between'>
          <div>
            <h1 className={`text-xl sm:text-2xl md:text-3xl font-bold ${textColor}`}>Portfolio</h1>
          </div>

          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${textColor} focus:outline-none p-2`}
            >
              <svg className='w-6 h-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d={!isMenuOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'} />
              </svg>
            </button>
          </div>

          <nav className='hidden md:flex space-x-4 lg:space-x-6 text-sm md:text-base lg:text-lg font-semibold items-center'>
            <NavLink to='/' className={getLinkClass} end>
              Home
            </NavLink>
            <NavLink to='/about' className={getLinkClass}>
              About
            </NavLink>
            <NavLink to='/projects' className={getLinkClass}>
              Projects
            </NavLink>
            <NavLink to='/contact' className={getLinkClass}>
              Contact
            </NavLink>
            <button
              onClick={toggleDarkMode}
              className={`px-3 md:px-4 py-2 rounded-full transition text-sm md:text-base ${toggleBg}`}
              aria-label='Toggle dark mode'
            >
              {darkMode ? 'Light' : 'Dark'} Mode
            </button>
          </nav>
        </header>

        {isMenuOpen && (
          <div className={`md:hidden px-4 mt-4 pb-4 space-y-3 font-semibold ${textColor}`}>
            <NavLink 
              to='/' 
              className={({ isActive }) => isActive ? activeLinkStyle : 'block hover:text-yellow-400 text-sm md:text-base'}
              onClick={() => setIsMenuOpen(false)}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to='/about' 
              className={({ isActive }) => isActive ? activeLinkStyle : 'block hover:text-yellow-400 text-sm md:text-base'}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to='/projects' 
              className={({ isActive }) => isActive ? activeLinkStyle : 'block hover:text-yellow-400 text-sm md:text-base'}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink 
              to='/contact' 
              className={({ isActive }) => isActive ? activeLinkStyle : 'block hover:text-yellow-400 text-sm md:text-base'}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            <button
              onClick={() => {
                toggleDarkMode()
                setIsMenuOpen(false)
              }}
              className={`block w-full text-left px-4 py-2 rounded-full transition text-sm md:text-base ${toggleBg}`}
            >
              {darkMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>
        )}
      </section>

      <Routes>
        <Route path='/' element={<Home darkMode={darkMode} />} />
        <Route path='/about' element={<About darkMode={darkMode} />} />
        <Route path='/projects' element={<Projects darkMode={darkMode} />} />
        <Route path='/contact' element={<Contact darkMode={darkMode} />} />
      </Routes>
    </main>
  )
}

export default App
