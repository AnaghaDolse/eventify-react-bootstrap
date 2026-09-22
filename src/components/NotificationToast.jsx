const NotificationToast = () => {
  return (
    <div
      className='toast show position-fixed bottom-0 start-50 translate-middle-x translate-lg-none end-lg m-3 shadow'
      role='alert'
      aria-live='assertive'
      aria-atomic='true'
    >
      <div className='toast-header bg-success text-white'>
        <i className='bi bi-check-circle-fill text-success me-2'></i>
        <strong className='me-auto'>Eventify</strong>
        <small>Just now</small>
        <button
          type='button'
          className='btn-close btn-close-white'
          data-bs-dismiss='toast'
          aria-label='Close'
        ></button>
      </div>
      <div className='toast-body'>
        Registration successful! See you at TechConnect 2026.
      </div>
    </div>
  )
}

export default NotificationToast
