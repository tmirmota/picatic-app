import React, { Component } from 'react';
import './SelectedEvent.css';

// Components
import Table from './Table';

class SelectedEvent extends Component {
  render() {
    const { event, tickets, editTicketId, handleEdit } = this.props;
    if (event.id) {
      return (
        <div>
          <div className="row">
            <div className="col manage_content_top">
              <span className="manage_content_top_heading">
                {event.attributes.title}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Tickets</p>
              <Table
                event={event}
                tickets={tickets}
                editTicketId={editTicketId}
                handleEdit={handleEdit}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return false;
    }
  }
}

export default SelectedEvent;
