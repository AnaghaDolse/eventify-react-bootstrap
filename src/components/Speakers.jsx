import SpeakerCard from "./SpeakerCard"

const Speakers = () => {
  const speakers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Senior Software Engineer',
      image: 'img1',
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'UI/UX Designer',
      image: 'img2',
    },
    {
      id: 3,
      name: 'Michael Smith',
      role: 'Cloud Architect',
      image: 'img3',
    },
  ]
  
  return (
    <section>
      <div className='container'>
        <h2 className='display-5 fw-bold text-center'>Our Speakers</h2>
        <p className='text-center'>
          Meet the experts joining TechConnect 2026.
        </p>
        <div className='row g-4'>
          {speakers.map((speaker) => (
            <div className='col-md-4' key={speaker.id}>
              <SpeakerCard
                name={speaker.name}
                role={speaker.role}
                image={speaker.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Speakers
