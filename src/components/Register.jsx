import { useState } from 'react'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ticket: '',
    message: '',
    terms: false,
  })
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    }

    if (!formData.ticket) {
      newErrors.ticket = 'Please select a ticket type'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    if (!formData.terms) {
      newErrors.terms = 'You must accept the terms and conditions'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validateForm()

    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      console.log(formData)
    }
  }

  return (
    <section className='py-5'>
      <div className='container'>
        <h2 className='display-5 fw-bold text-center'>
          Register for TechConnect
        </h2>

        <p className='text-center'>
          Join us at the biggest developer conference of 2026.
        </p>
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            <div className='card shadow-sm'>
              <div className='card-body p-4'>
                <form onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='name' className='form-label'>
                        Full Name
                      </label>
                      <input
                        type='text'
                        className={`form-control ${errors.name ? 'is-valid' : ''}`}
                        id='name'
                        placeholder='Enter your name'
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                      />
                      {errors.name && (
                        <div className='invalid-feedback'>{errors.name}</div>
                      )}
                    </div>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='email' className='form-label'>
                        Email
                      </label>

                      <input
                        type='email'
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id='email'
                        placeholder='Enter your email'
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                      />
                      {errors.email && (
                        <div className='invalid-feedback'>{errors.email}</div>
                      )}
                    </div>
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='ticket' className='form-label'>
                      Ticket Type
                    </label>
                    <select
                      className={`form-select ${errors.ticket ? 'is-invalid' : ''}`}
                      id='ticket'
                      value={formData.ticket}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          ticket: e.target.value,
                        })
                      }
                    >
                      <option>Select Ticket Type</option>
                      <option>Standard</option>
                      <option>VIP</option>
                      <option>Workshop Pass</option>
                    </select>
                    {errors.ticket && (
                      <div className='invalid-feedback'>{errors.ticket}</div>
                    )}
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='message' className='form-label'>
                      Message
                    </label>
                    <textarea
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      id='message'
                      rows='4'
                      placeholder='Tell us something about yourself...'
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                    ></textarea>
                    {errors.message && (
                      <div className='invalid-feedback'>{errors.message}</div>
                    )}
                  </div>
                  <div className='form-check mb-3'>
                    <input
                      className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`}
                      type='checkbox'
                      id='terms'
                      checked={formData.terms}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          terms: e.target.checked,
                        })
                      }
                    />
                    {errors.terms && (
                      <div className='invalid-feedback'>{errors.terms}</div>
                    )}
                    <label className='form-check-label' htmlFor='terms'>
                      I agree to the terms and conditions.
                    </label>
                  </div>
                  <button type='submit' className='btn btn-primary'>
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
