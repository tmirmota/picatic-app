import React, { Component } from 'react';

import Row from './Row';

export default class Table extends Component {
  render() {
    const { tickets, editTicketId, handleEdit } = this.props;
    return (
      <form>
        <table className="table">
          <thead>
            <tr>
              <th>Ticket Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {/* Render Each Row */}
            {tickets.map(ticket => {
              return <Row
                      key={ticket.id}
                      ticket={ticket}
                      editTicketId={editTicketId}
                      handleEdit={handleEdit}
                     />
            })}

          </tbody>
        </table>
      </form>
    )
  }
}
