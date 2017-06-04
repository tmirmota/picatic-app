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
    const events = this.props.events.map(event => {
      const statusMatch = event.attributes.status === status;
      if (statusMatch) {
        return (
          <div key={event.id}>
            <Event event={event} />
          </div>
        );
      }
    })
    return events;
  }
  renderStatus() {
    const eventStatus = this.state.statuses.map(status => {
      const isLive = this.state.liveStatuses.indexOf(status.type) > -1;
      if (isLive) {
        return (
          <div key={status.type}>
            <div>{status.title}</div>
            {this.renderEvents(status.type)}
          </div>
        );
      }
    })
    return eventStatus;
  }
  render() {
    return (
      <div>
        {this.renderStatus()}
      </div>
    )
  }
}

export default Events;
