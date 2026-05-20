function Contact({ darkMode }) {
  const bg = darkMode ? 'bg-[var(--darkmode-1)] text-white' : ''
  const textColor = darkMode ? 'text-gray-200' : 'text-gray-700'
  const inputBg = darkMode ? 'bg-[var(--darkmode-2)] text-white' : 'bg-white text-gray-700'
  const sectionBg = darkMode ? 'bg-[var(--darkmode-2)]' : 'bg-[var(--lightmode-cyan)]'

  return (
    <>
    <main className={`main-content ${bg} px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16`}>
      <div className='container mx-auto max-w-2xl'>
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center ${textColor}`}>Contact Me</h1>
        <p className={`text-base md:text-lg ${textColor} mb-8 md:mb-12 text-center leading-relaxed`}>
          I\'d love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello,
          feel free to reach out.
        </p>
        <form className='space-y-5 md:space-y-6'>
          <div>
            <label htmlFor='name' className={`block text-sm md:text-base font-medium ${textColor} mb-2`}>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              className={`w-full px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputBg}`}
              required
            />
          </div>
          <div>
            <label htmlFor='email' className={`block text-sm md:text-base font-medium ${textColor} mb-2`}>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              className={`w-full px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputBg}`}
              required
            />
          </div>
          <div>
            <label htmlFor='message' className={`block text-sm md:text-base font-medium ${textColor} mb-2`}>Message</label>
            <textarea
              id='message'
              name='message'
              rows='5'
              className={`w-full px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputBg}`}
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-[var(--lightmode-cyan2)] text-white py-3 md:py-4 px-6 text-base md:text-lg rounded-md hover:bg-[var(--lightmode-red)] transition duration-300 font-semibold'
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
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
    </>
  )
}

export default Contact