import React from 'react'

function TicketNum({ num }) { // Destructure the props object to directly access num
  return (
    <div>
      <span className='text-2xl flex'>{num}</span>
    </div>
  )
}

export default TicketNum
