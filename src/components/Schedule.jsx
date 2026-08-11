const Schedule = () => {
  return (
    <section className='py-5'>
      <div className='container'>
        <h2 className='display-5 fw-bold text-center'>Event Schedule</h2>
        <p className='text-center'>
          Three days of talks, workshops and networking.
        </p>
        <div className='table-responsive'>
          <table className='table table-striped table-hover'>
            <thead className='table-dark'>
            <tr>
              <th>Time</th>
              <th>Session</th>
              <th>Speaker</th></tr> 
            </thead>
            <tbody>
              <tr>
                <td>09:00 AM</td>
                <td>Opening Keynote</td>
                <td>John Doe</td>
              </tr>
              <tr>
                <td>10:30 AM</td>
                <td>Building Modern React Applications</td>
                <td>Sarah Williams</td>
              </tr>
              <tr>
                <td>01:00 PM</td>
                <td>Cloud Architecture for Developers</td>
                <td>Michael Smith</td>
              </tr>
              <tr>
                <td>03:00 PM</td>
                <td>Design Systems Workshop</td>
                <td>Sarah Williams</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Schedule
