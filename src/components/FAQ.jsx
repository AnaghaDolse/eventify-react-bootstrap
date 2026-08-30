const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: 'What is TechConnect 2026?',
      answer:
        'TechConnect 2026 is a developer conference focused on modern web development, cloud technologies, design and networking.',
    },
    {
      id: 2,
      question: 'Where is the event being held?',
      answer: 'The event will be held at the TechConnect Convention Center.',
    },
    {
      id: 3,
      question: 'What does my ticket include?',
      answer:
        'Your ticket includes access to conference sessions, workshops and networking activities.',
    },
    {
      id: 4,
      question: 'Can I get a refund?',
      answer:
        'Refund requests can be submitted up to 14 days before the event.',
    },
  ]

  return (
    <section className='py-5'>
      <div className='container'>
        <h2 className='display-5 fw-bold text-center'>
          Frequently Asked Questions
        </h2>

        <p className='text-center mb-4'>
          Find answers to common questions about TechConnect 2026.
        </p>

        <div className='accordion' id='faqAccordion'>
          {faqs.map((faq, index) => (
            <div className='accordion-item' key={faq.id}>
              <h2 className='accordion-header'>
                <button
                  className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target={`#faq${faq.id}`}
                  aria-expanded={index === 0 ? 'true' : 'false'}
                  aria-controls={`faq${faq.id}`}
                >
                  {faq.question}
                </button>
              </h2>

              <div
                id={`faq${faq.id}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                data-bs-parent='#faqAccordion'
              >
                <div className='accordion-body'>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
