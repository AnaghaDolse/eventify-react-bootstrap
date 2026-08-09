import React from 'react'

const SpeakerCard = ({ name, role, image }) => {
  return (
    <div>
      <div className='card h-100 shadow-sm'>
        <img src={image} className='card-img-top' alt={name} />

        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>{role}</p>
          <button className='btn btn-primary'>View Profile</button>
        </div>
      </div>
    </div>
  )
}

export default SpeakerCard
