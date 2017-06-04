import React, { Component } from 'react';
import _ from 'lodash';

import Event from './Event';

class Events extends Component {
  state = {
    statuses: [
      {type: 'active', title: 'Live'},
      {type: 'draft', title: 'Draft'},
      {type: 'closed', title: 'Closed'}
    ],
    liveStatuses: []
  }
  componentWillReceiveProps({ events }) {
    const allEventStatuses = _.map(events, 'attributes.status');
    const liveStatuses = _.uniq(allEventStatuses);

    this.setState({ liveStatuses });
  }
  renderEvents(status) {
    const { handleSelect } = this.props;
    const events = this.props.events.map(event => {
      const statusMatch = event.attributes.status === status;
      if (statusMatch) {
        return (
          <li className="nav-item" key={event.id}>
            <a className="nav-link" onClick={() => handleSelect(event)}>
              <Event event={event} />
            </a>
          </li>
        );
      }
    })
    return events;
  }
  renderStatuses() {
    const eventStatus = this.state.statuses.map(status => {
      const isLive = this.state.liveStatuses.indexOf(status.type) > -1;
      if (isLive) {
        return (
          <ul className="nav flex-column" key={status.type}>
            <div>{status.title}</div>
            {this.renderEvents(status.type)}
          </ul>
        );
      }
    })
    return eventStatus;
  }
  render() {
    return (
      <nav>
        {this.renderStatuses()}
      </nav>
    )
  }
}

export default Events;
