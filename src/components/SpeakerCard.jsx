import { useState } from 'react'
import SpeakerModal from './SpeakerModal'

const SpeakerCard = ({ name, role, image, bio, session, expertise }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <div className='card h-100 shadow-sm'>
        <img src={image} className='card-img-top' alt={name} />

        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>{role}</p>
          <button
            className='btn btn-primary'
            onClick={() => setShowModal(true)}
          >
            View Profile
          </button>
          {showModal && (
            <SpeakerModal
              speaker={{ name, role, bio, session, expertise }}
              onClose={() => setShowModal(false)}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default SpeakerCard
