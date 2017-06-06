import React, { Component } from 'react';
import _ from 'lodash';

export default class Row extends Component {
  state = {
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
    const { name, price, quantity, status, statusOptions } = this.state;
    const attr = ticket.attributes;
    const editTicket = ticket.id === editTicketId;
    if (!editTicket) {
      return (
        <tr key={ticket.id}>
          <td>{attr.name}</td>
          <td>${attr.price}</td>
          <td>{attr.quantity}</td>
          <td>{attr.status}</td>
          <td className="text-center"><button className="btn btn-primary" onClick={() => handleEdit(ticket.id)}>Edit</button></td>
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
