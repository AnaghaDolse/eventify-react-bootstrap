import HeroImage from '../assets/eventify_banner.jfif'
const Hero = () => {
  return (
    <section id='home' className='bg-light'>
      <div className='container py-5'>
        <div className='row align-items-center g-5 min-vh-75'>
          {/* Hero Content */}
          <div className='col-lg-6 text-center text-lg-start'>
            <span className='badge text-bg-primary rounded-pill px-3 py-2 mb-3'>
              TECH CONFERENCE 2026
            </span>

            <h1 className='display-4 fw-bold mb-3'>TechConnect 2026</h1>

            <p className='lead text-secondary mb-4'>
              Join the biggest developer conference to learn, connect, and grow
              with developers from around the world.
            </p>

            <div className='d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3 mb-4'>
              <a href='#register' className='btn btn-primary btn-lg px-4'>
                Register Now
              </a>

              <a href='#schedule' className='btn btn-outline-dark btn-lg px-4'>
                View Schedule
              </a>
            </div>

            <div className='d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3 text-secondary'>
              <span>📅 15–17 October 2026</span>

              <span className='d-none d-sm-inline'>•</span>

              <span>📍 Pune, Maharashtra</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className='col-lg-6'>
            <div className='bg-white rounded-4 shadow p-2'>
              <img
                src={HeroImage}
                alt='TechConnect conference'
                className='img-fluid rounded-4 w-100'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
