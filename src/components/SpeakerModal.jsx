const SpeakerModal = ({ speaker, onClose }) => {
  return (
    <div>
      <div
        className='modal fade show'
        style={{ display: 'block' }}
        tabIndex='-1'
        aria-labelledby='speakerModalLabel'
        aria-hidden='false'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='speakerModalLabel'>
                {speaker.name}
              </h5>

              <button
                type='button'
                className='btn-close'
                onClick={onClose}
                aria-label='Close'
              ></button>
            </div>

            <div className='modal-body'>
              <h6 className='text-primary'>{speaker.role}</h6>
              <p className='mt-3'>{speaker.bio}</p>

              <div className='mb-3'>
                <strong>Expertise:</strong>
                <span className='badge text-bg-info ms-2'>
                  {speaker.expertise}
                </span>
              </div>

              <div className='mb-3'>
                <strong>Session:</strong>
                <p className='mb-0'>{speaker.session}</p>
              </div>
            </div>

            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={onClose}
              >
                {' '}
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='modal-backdrop fade show'></div>
    </div>
  )
}

export default SpeakerModal
