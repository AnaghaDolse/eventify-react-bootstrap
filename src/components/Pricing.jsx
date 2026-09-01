import 'bootstrap-icons/font/bootstrap-icons.css'

const Pricing = () => {
  const tickets = [
    {
      id: 1,
      name: 'Standard',
      price: '999',
      description: 'Perfect for developers attending the main conference.',
      features: ['Conference Access', 'Networking Events', 'Digital Resources'],
    },
    {
      id: 2,
      name: 'VIP',
      price: '1,999',
      description: 'Get the premium TechConnect experience.',
      features: [
        'Conference Access',
        'VIP Seating',
        'Networking Events',
        'Speaker Meet & Greet',
      ],
      popular: true,
    },
    {
      id: 3,
      name: 'Workshop Pass',
      price: '2,499',
      description: 'Best for developers who want hands-on learning.',
      features: [
        'Conference Access',
        'Hands-on Workshops',
        'Workshop Materials',
        'Digital Resources',
      ],
    },
  ]

  return (
    <section className='py-5'>
      <div className='container'>
        <h2 className='display-5 fw-bold text-center'>Choose Your Ticket</h2>
        <p className='text-center mb-4'>
          Pick the ticket that works best for you.
        </p>
        <div className='row g-4'>
          {tickets.map((ticket) => (
            <div className='col-md-4' key={ticket.id}>
              <div className='card h-100 shadow-sm'>
                <div className='card-body d-flex flex-column'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <h5 className='card-title mb-0'>{ticket.name}</h5>
                    {ticket.popular && (
                      <span className='badge text-bg-primary'>Popular</span>
                    )}
                    <h3 className='display-6 fw-bold mt-4'>₹{ticket.price}</h3>
                    <p className='text-muted'>{ticket.description}</p>

                    <ul className='list-group list-group-flush mb-4'>
                      {ticket.features.map((feature, index) => (
                        <li className='list-group-item px-0' key={index}>
                          <i className='bi bi-check-circle-fill text-success me-2'></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className='mt-auto'>
                      <button className='btn btn-primary w-100'>
                        Get Ticket
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
