import React, { Component } from 'react';
import './SelectedEvent.css';

// Components
import Table from './Table';

// Component renders error messages for selected event
class ErrorMessage extends Component {
  render() {
    const { heading, subheading } = this.props;
    return (
      <div className="col align-self-center text-center">
        <span className="manage_content_starting_title">
          {heading}
        </span>
        <br/>
        <span className="manage_content_starting_subtitle">
          {subheading}
        </span>
      </div>
    );
  }
}

export default class SelectedEvent extends Component {
  render() {
    // Destructure props
    const { event, tickets, editTicketId, handleEdit, handleSave } = this.props;

    // Manage content title is blank when no event is selected
    const title = event.id ? event.attributes.title : null;

    // Render table if an event is selected
    const table = () => {
      if (event.id) {
        const hasTickets = tickets.length > 0;
        if (hasTickets) {
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
              <ErrorMessage
                heading="No tickets for this event"
                subheading="Please select another event"
              />
            )
        }
      } else {
        return (
          <ErrorMessage
            heading="No event selected"
            subheading="Select an event to edit ticket details"
          />
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
