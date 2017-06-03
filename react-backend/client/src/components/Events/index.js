import React, { Component } from 'react';
import _ from 'lodash';

import Event from './Event';

class Events extends Component {
  state = {
    eventStatus: []
  }
  componentWillReceiveProps(nextProps) {
    const { events } = nextProps;
    const allEventStatus = _.map(events, 'attributes.status');
    const eventStatus = _.uniq(allEventStatus);
    this.setState({ eventStatus })
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
    const eventStatus = this.state.eventStatus.map(status => {
      return (
        <div key={status}>
          <div>{status}
          </div>
          {this.renderEvents(status)}
        </div>
      );
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
