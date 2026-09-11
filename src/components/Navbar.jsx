const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
      <div className='container'>
        {/* Brand */}
        <div className='d-flex align-items-center'>
          <a className='navbar-brand' href='#'>
            Eventify
          </a>
          <span className='text-secondary d-none d-lg-inline ms-2'>Build. Connect. Innovate.</span>
        </div>

        {/* Mobile Target */}
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

        {/* Collapsible Navigation */}
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-lg-auto'>
            <li className='nav-item ms-lg-3'>
              <a className='nav-link active' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item ms-lg-3'>
              <a className='nav-link' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item ms-lg-3'>
              <a className='nav-link' href='#speakers'>
                Speakers
              </a>
            </li>
            <li className='nav-item ms-lg-3'>
              <a className='nav-link' href='#schedule'>
                Schedule
              </a>
            </li>
            <li className='nav-item ms-lg-3'>
              <a className='nav-link' href='#contact'>
                Contact
              </a>
            </li>
            <li className='nav-item ms-lg-3'>
              <a href='#register' className='btn btn-primary'>
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
