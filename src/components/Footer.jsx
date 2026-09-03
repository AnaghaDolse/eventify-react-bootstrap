const Footer = () => {
  return (
    <footer className='bg-dark text-white pt-5'>
      <div className='container'>
        <div className='row g-4'>
          {/* Brand */}
          <div className='col-md-6 col-lg-4'>
            <h4 className='fw-bold'>Eventify</h4>
            <p className='text-secondary'>Build. Connect. Innovate.</p>
          </div>

          {/* Quick Links */}
          <div className='col-md-6 col-lg-2'>
            <h5 className='fw-bold'>Quick Links</h5>

            <ul className='list-unstyled'>
              <li className='mb-2'>
                <a href='#home' className='text-secondary text-decoration-none'>
                  Home
                </a>
              </li>
              <li className='mb-2'>
                <a
                  href='#about'
                  className='text-secondary text-decoration-none'
                >
                  About
                </a>
              </li>
              <li className='mb-2'>
                <a
                  href='#speakers'
                  className='text-secondary text-decoration-none'
                >
                  Speakers
                </a>
              </li>
              <li className='mb-2'>
                <a
                  href='#schedule'
                  className='text-secondary text-decoration-none'
                >
                  Schedule
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className='col-md-6 col-lg-3'>
            <h5 className='fw-bold'>Contact</h5>
            <p className='text-secondary mb-2'>Pune, Maharastra, India</p>
            <p className='text-secondary mb-2'>hello@eventify.com</p>
            <p className='text-secondary'>+91 9876543210</p>
          </div>

          {/* Social Media */}
          <div className='col-md-6 col-lg-3'>
            <h5 className='fw-bold'>Follow Us</h5>

            <div className='d-flex gap-3'>
              <a href='#' className='text-white fs-4'>
                <i className='bi bi-linkedin'></i>
              </a>
              <a href='#' className='text-white fs-4'>
                <i className='bi bi-twitter-x'></i>
              </a>
              <a href='#' className='text-white fs-4'>
                <i className='bi bi-instagram'></i>
              </a>
              <a href='#' className='text-white fs-4'>
                <i className='bi bi-github'></i>
              </a>
            </div>
          </div>
        </div>
        <hr className='mt-5' />

        <div className='text-center py-3'>
          <p className='mb-0 text-secondary'>
            © 2026 Eventify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
