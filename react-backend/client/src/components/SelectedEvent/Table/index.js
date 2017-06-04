import React from 'react';

export default ({event, tickets}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Ticket Name</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map(ticket => {
          const attr = ticket.attributes;
          return(
            <tr key={ticket.id}>
              <td>{attr.name}</td>
              <td>{attr.price}</td>
              <td>{attr.quantity}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
