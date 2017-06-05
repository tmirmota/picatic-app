import React, { Component } from 'react';

export default class Row extends Component {
  componentWillMount() {
    this.ticketValue();
  }
  componentWillReceiveProps() {
    this.ticketValue();
  }
  ticketValue() {
    const { name, price, quantity, status } = this.props.ticket.attributes;
    this.setState({ name, price, quantity, status })
  }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value})
  }
  render() {
    const { ticket, editTicketId, handleEdit } = this.props;
    const { name, price, quantity, status } = this.state;
    const attr = ticket.attributes;
    const editTicket = ticket.id === editTicketId;
    if (!editTicket) {
      return (
        <tr key={ticket.id}>
          <td>{attr.name}</td>
          <td>{attr.price}</td>
          <td>{attr.quantity}</td>
          <td>{attr.status}</td>
          <td><button className="btn btn-primary" onClick={() => handleEdit(ticket.id)}>Edit</button></td>
        </tr>
      )
    } else {
      return (
        <tr key={ticket.id}>
          <td>
            <input
              name="name"
              type="text"
              className="form-control"
              value={name}
              onChange={this.handleInputChange}
            />
          </td>
          <td>
            <input
              name="price"
              type="number"
              className="form-control"
              value={price}
              onChange={this.handleInputChange}
            />
          </td>
          <td>
            <input
              name="quantity"
              type="number"
              className="form-control"
              value={quantity}
              onChange={this.handleInputChange}
            />
          </td>
          <td>
            <input
              name="status"
              type="text"
              className="form-control"
              value={status}
              onChange={this.handleInputChange}
            />
          </td>
          <td>
            <input
              type="button"
              className="btn btn-success"
              value="Save"
              onClick={() => handleEdit(ticket.id)}
            />
          </td>
        </tr>
      )
    }
  }
}
