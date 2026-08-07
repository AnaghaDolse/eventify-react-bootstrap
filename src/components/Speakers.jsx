const Speakers = () => {
  return (
    <section>
      <div className='container'>
        <h2 className='display-5 fw-bold text-center'>Our Speakers</h2>
        <p className='text-center'>
          Meet the experts joining TechConnect 2026.
        </p>
        <div className='row g-4'>
          <div className='col-md-4'>
            <div className='card h-100 shadow-sm'>
              <img src='/img1' className='card-img-top' alt='Speaker' />
              <div className='card-body'>
                <h5 className='card-title'>John Doe</h5>
                <p className='card-text'>Senior Software Engineer</p>
                <button className='btn btn-primary'>View Profile</button>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card h-100 shadow-sm'>
              <img src='/img2' className='card-img-top' alt='Speaker' />
              <div className='card-body'>
                <h5 className='card-title'>Sarah Williams</h5>
                <p className='card-text'>UI/UX Designer</p>
                <button className='btn btn-primary'>View Profile</button>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card h-100 shadow-sm'>
              <img src='/img3' className='card-img-top' alt='Speaker' />
              <div className='card-body'>
                <h5 className='card-title'>Michael Smith</h5>
                <p className='card-text'>Cloud Architect</p>
                <button className='btn btn-primary'>View Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Speakers
