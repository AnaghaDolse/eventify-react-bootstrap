import SpeakerCard from './SpeakerCard'

const Speakers = () => {
  const speakers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Senior Software Engineer',
      image: 'img1',
      bio: 'John specializes in building scalable web applications and modern frontend architectures.',
      session: 'Opening Keynote',
      expertise: 'React & Web Development',
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'UI/UX Designer',
      image: 'img2',
      bio: 'Sarah focuses on creating accessible, user-friendly interfaces and design systems.',
      session: 'Building Modern React Applications',
      expertise: 'UI/UX & Design Systems',
    },
    {
      id: 3,
      name: 'Michael Smith',
      role: 'Cloud Architect',
      image: 'img3',
      bio: 'Michael helps teams design reliable and scalable cloud infrastructure.',
      session: 'Cloud Architecture for Developers',
      expertise: 'Cloud & Infrastructure',
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
                bio={speaker.bio}
                session={speaker.session}
                expertise={speaker.expertise}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Speakers
