const Announcement = () => {
  return (
    <section className='container py-4'>
      <div
        className='alert alert-primary d-flex align-items-center'
        role='alert'
      >
        <i className='bi bi-megaphone-fill me-3 fs-4'></i>
        <div>
          <strong>Early Bird Tickets Available!</strong>
          <p className='mb-0'>
            Register now and get exclusive early bird pricing.
          </p>
        </div>
        <button
          type='button'
          className='btn-close'
          data-bs-dismiss='alert'
          aria-label='Close'
        ></button>
      </div>
    </section>
  )
}

export default Announcement
