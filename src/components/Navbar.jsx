const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm'>
      <div className='container py-2'>
        {/* Brand */}
        <a className='navbar-brand fw-bold fs-3' href='#home'>
          Eventify
        </a>

        {/* Mobile Toggle */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* Navigation */}
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto align-items-lg-center gap-lg-2'>
            <li className='nav-item'>
              <a className='nav-link active' href='#home'>
                Home
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#about'>
                About
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#speakers'>
                Speakers
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#schedule'>
                Schedule
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#contact'>
                Contact
              </a>
            </li>

            <li className='nav-item ms-lg-2 mt-2 mt-lg-0'>
              <a href='#register' className='btn btn-primary px-4'>
                Register Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
