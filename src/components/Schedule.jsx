const schedule = [
  {
    id: 1,
    time: '09:00 AM',
    session: 'Opening Keynote',
    speaker: 'John Doe',
    type: 'Keynote',
  },
  {
    id: 2,
    time: '10:30 AM',
    session: 'Building Modern React Applications',
    speaker: 'Sarah Williams',
    type: 'Workshop',
  },
  {
    id: 3,
    time: '01:00 PM',
    session: 'Cloud Architecture for Developers',
    speaker: 'Michael Smith',
    type: 'Talk',
  },
  {
    id: 4,
    time: '03:00 PM',
    session: 'Design Systems Workshop',
    speaker: 'Sarah Williams',
    type: 'Workshop',
  },
]

const Schedule = () => {
  const getBadgeClass = (type) => {
    if (type === 'Keynote') {
      return 'badge text-bg-primary'
    }

    if (type === 'Workshop') {
      return 'badge text-bg-warning'
    }

    return 'badge text-bg-info'
  }
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
                <th>Speaker</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item) => (
                <tr key={item.id}>
                  <td>{item.time}</td>
                  <td>{item.session}</td>
                  <td>{item.speaker}</td>
                  <td>
                    <span className={getBadgeClass(item.type)}>
                      {item.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Schedule
