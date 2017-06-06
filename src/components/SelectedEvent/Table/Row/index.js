import React, { Component } from 'react';
import _ from 'lodash';
import './Row.css';

export default class Row extends Component {
  state = {
    ticket: {
      name: null,
      price: null,
      quantity: null,
      status: null
    },
    statusOptions: [
      'Open',
      'Hidden',
      'Closed'
    ]
  }

  // Update state with original ticket data before row loads
  componentWillMount() {
    this.updateTicket();
  }

  // Update state with new ticket date after save
  componentWillReceiveProps() {
    this.updateTicket();
  }

  updateTicket() {
    // Destructure attributes
    const { name, price, quantity, status } = this.props.ticket.attributes;

    this.setState({ ticket: { name, price, quantity, status } })
  }

  // Update state on input change
  handleInputChange = ({ target }) => {
    // Store value of input
    const value = target.value;

    // Store ref of input
    const name = target.name;

    this.setState({ ticket: { [name]: value } })
  }

  render() {
    // Destructure props and props ticket attributes
    const { ticket, editTicketId, handleEdit, handleSave } = this.props;
    const attr = ticket.attributes;

    // Destructure state and ticket state
    const { statusOptions } = this.state;
    const { name, price, quantity, status } = this.state.ticket;

    // Capitalize ticket statuses
    const capitalizeState = _.upperFirst(attr.status);

    // Render form inputs if ticket edit button is clicked
    const shouldEditTicket = ticket.id === editTicketId;
    if (!shouldEditTicket) {
      return (
        <tr key={ticket.id}>
          <td className="ticket_table_body_title">{attr.name}</td>
          <td>${attr.price}</td>
          <td>{attr.quantity}</td>
          <td>{capitalizeState}</td>
          <td className="text-center">
            <button className="btn btn_ticket_edit" onClick={() => handleEdit(ticket.id)}>Edit</button>
          </td>
        </tr>
      )
    } else {
      // TODO: Should consider building a resuable component to render inputs
      return (
        <tr key={ticket.id}>
          <td>
            <input
              name="name"
              type="text"
              className="form-control"
              value={name}
              onChange={this.handleInputChange}
              required
            />
          </td>
          <td>
            <div className="input-group">
              <span className="input-group-addon">$</span>
              <input
                name="price"
                type="number"
                className="form-control"
                value={price}
                onChange={this.handleInputChange}
                required
              />
            </div>
          </td>
          <td>
            <input
              name="quantity"
              type="number"
              className="form-control"
              value={quantity}
              onChange={this.handleInputChange}
              required
            />
          </td>
          <td>
            <select
              name="status"
              className="form-control custom-select"
              onClick={this.handleInputChange}
              required
              >
              {statusOptions.map(option => {

                // Does option match state ticket status
                const isSelected = _.toLower(option) === _.toLower(status);

                // TODO: Should turn into ternary
                if (isSelected) {
                  return <option key={option} selected>{option}</option>
                } else {
                  return <option key={option}>{option}</option>
                }

              })}
            </select>
          </td>
          <td className="text-center">
            <input
              type="button"
              className="btn btn_ticket_save"
              value="Save"
              onClick={() => handleSave(ticket.id, this.state.ticket)}
            />
          </td>
        </tr>
      )
    }
  }
}
