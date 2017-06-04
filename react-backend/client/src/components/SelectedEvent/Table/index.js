import React, { Component } from 'react';

export default class Table extends Component {
  state = {
    editId: null
  }

  handleEdit(id) {
    this.setState({ editId: id })
  }
  render() {
    const { tickets } = this.props;
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
              const attr = ticket.attributes;
              const editTicket = ticket.id === this.state.editId;
              if (!editTicket) {
                return (
                  <tr key={ticket.id}>
                    <td>{attr.name}</td>
                    <td>{attr.price}</td>
                    <td>{attr.quantity}</td>
                    <td>{attr.status}</td>
                    <td><button className="btn btn-primary" onClick={() => this.handleEdit(ticket.id)}>Edit</button></td>
                  </tr>
                )
              } else {
                return (
                  <tr key={ticket.id}>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={attr.name} />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={attr.price} />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={attr.quantity} />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={attr.status} />
                    </td>
                    <td>
                      <button className="btn btn-success">Save</button>
                    </td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </form>
    )
  }
}
