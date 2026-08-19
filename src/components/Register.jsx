import React from 'react'

const Register = () => {
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
                <form>
                  <div className='row'>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='name' className='form-label'>
                        Full Name
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='name'
                        placeholder='Enter your name'
                      />
                    </div>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='email' className='form-label'>
                        Email
                      </label>

                      <input
                        type='email'
                        className='form-control'
                        id='email'
                        placeholder='Enter your email'
                      />
                    </div>
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='ticket' className='form-label'>
                      Ticket Type
                    </label>
                    <select className='form-select' id='ticket'>
                      <option>Select Ticket Type</option>
                      <option>Standard</option>
                      <option>VIP</option>
                      <option>Workshop Pass</option>
                    </select>
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='message' className='form-label'>
                      Message
                    </label>
                    <textarea
                      className='form-control'
                      id='message'
                      rows='4'
                      placeholder='Tell us something about yourself...'
                    ></textarea>
                  </div>
                  <div className='form-check mb-3'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='terms'
                    />
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
