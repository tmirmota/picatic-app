import React, { Component } from 'react';
import _ from 'lodash';
import './Row.css';

class Row extends Component {
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
  componentWillMount() {
    this.updateTicket();
  }
  componentWillReceiveProps() {
    this.updateTicket();
  }
  updateTicket() {
    const {
      name, price, quantity, status
    } = this.props.ticket.attributes;
    this.setState({ ticket: { name, price, quantity, status } })
  }
  handleInputChange = ({ target }) => {
    const value = target.value;
    const name = target.name;
    this.setState({ ticket: { [name]: value } })
  }
  render() {

    const {
      ticket, editTicketId, handleEdit, handleSave
    } = this.props;

    const {
      name, price, quantity, status
    } = this.state.ticket;

    const { statusOptions } = this.state;
    const attr = ticket.attributes;
    const capitalizeState = _.upperFirst(attr.status)
    const shouldEditTicket = ticket.id === editTicketId;
    if (!shouldEditTicket) {
      return (
        <tr key={ticket.id}>
          <td className="ticket_table_body_title">{attr.name}</td>
          <td>${attr.price}</td>
          <td>{attr.quantity}</td>
          <td>{capitalizeState}</td>
          <td className="text-center"><button className="btn btn_ticket_edit" onClick={() => handleEdit(ticket.id)}>Edit</button></td>
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
                const isSelected = _.toLower(option) === _.toLower(status);
                return isSelected
                ? <option key={option} selected>{option}</option>
                : <option key={option}>{option}</option>
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

export default Row;
