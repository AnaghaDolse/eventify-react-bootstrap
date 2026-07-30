import HeroImage from '../assets/hero.png'

const Hero = () => {
  return (
    <>
      <div className='container'>
        <div className='row align-items-center g-5'>
          <div className='col-lg-6 text-center text-lg-start'>
            <h1 className='display-3'>TechConnect 2026</h1>
            <p className='lead py-2'>
              Join the biggest developer conference to learn, connect and grow.
            </p>
            <div className='d-flex justify-content-center gap-3'>
              <button className='btn btn-primary'>Register Now</button>

              <button className='btn btn-outline-dark'>Learn More</button>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='bg-secondary text-white p-5 text-center rounded'>
              <img src={HeroImage} alt='Event Hero' className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
