import React, { Component } from 'react';
import './SelectedEvent.css';

// Components
import Table from './Table';

export default class SelectedEvent extends Component {
  render() {
    // Destructure props
    const { event, tickets, editTicketId, handleEdit, handleSave } = this.props;

    // Manage content title is blank when no event is selected
    const title = event.id ? event.attributes.title : null;

    // Render table if an event is selected
    const table = () => {
      if (event.id) {
        return (
          <div className="col px-5">
            <p className="manage_content_table_title">Tickets</p>
            <Table
              event={event}
              tickets={tickets}
              editTicketId={editTicketId}
              handleEdit={handleEdit}
              handleSave={handleSave}
            />
          </div>
        )
      } else {
        return (
          <div className="col align-self-center text-center">
            <span className="manage_content_starting_title">
              No event selected.
            </span>
            <br/>
            <span className="manage_content_starting_subtitle">
              Select an event to edit ticket details.
            </span>
          </div>
        )
      }
    }

    return (
      <div>
        <div className="row">
          <div className="col manage_content_top px-5">
            <span className="manage_content_top_heading">
              {title}
            </span>
          </div>
        </div>
        <div className="row manage_content_table">
          {table()}
        </div>
      </div>
    );
  }
}
