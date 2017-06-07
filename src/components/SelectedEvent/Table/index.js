import React, { Component } from 'react';
import './Table.css';

// Components
import Row from './Row';

export default class Table extends Component {
  render() {
    // Destructure props
    const { tickets, editTicketId, handleEdit, handleSave } = this.props;

    return (
      <table className="table">
        <thead className="ticket_table_head">
          <tr>
            <th className="w-40">Ticket Name</th>
            <th className="w-20">Price</th>
            <th className="w-20">Qty</th>
            <th className="w-20">Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="ticket_table_body">

          {/* Render Each Row */}
          {tickets.map(ticket => {
            return <Row
                     key={ticket.id}
                     ticket={ticket}
                     editTicketId={editTicketId}
                     handleEdit={handleEdit}
                     handleSave={handleSave}
                   />
          })}

        </tbody>
      </table>
    )
  }
}
