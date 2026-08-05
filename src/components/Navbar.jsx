const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container'>
        {/* Brand */}
        <a className="navbar-brand href='#'">Eventify</a>

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
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a className='nav-link active' href='#'>
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
          </ul>
          <button className='btn btn-primary ms-lg-3'>Register Now</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
