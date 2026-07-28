const Hero = () => {
  return (
    <>
      <div className='container py-5'>
        <h1 className='text-center display-3'>TechConnect 2026</h1>
        <p className='lead text-center py-2'>
          Join the biggest developer conference to learn, connect and grow.
        </p>
        <div className='d-flex justify-content-center gap-3'>
          <button className='btn btn-primary me-3'>Register Now</button>

          <button className='btn btn-outline-dark'>Learn More</button>
        </div>
      </div>
    </>
  )
}

export default Hero
