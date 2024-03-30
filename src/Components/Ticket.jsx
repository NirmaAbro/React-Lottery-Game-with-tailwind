import React from 'react'
import TicketNum from './TicketNum'

function Ticket({ ticket }) { // Destructure the props object to directly access ticket
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
      {/* <TicketNum num={ticket[0]}/> Pass the number directly, not the object */}
      {
        ticket.map((num,idx)=>{
            return <TicketNum key={idx} num={num} />
        })
      }
    </div>
  )
}

export default Ticket
