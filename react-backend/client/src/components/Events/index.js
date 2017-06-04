import React, { Component } from 'react';
import _ from 'lodash';

import Event from './Event';

class Events extends Component {
  state = {
    typeStatus: [
      'active',
      'draft',
      'closed'
    ],
    liveStatus: []
  }
  componentWillReceiveProps(nextProps) {
    const { events } = nextProps;
    const { liveStatus } = this.state;

    const allEventStatus = _.map(events, 'attributes.status');
    const liveStatus = _.uniq(allEventStatus);

    const containsActive = uniqueStatus.indexOf('active') > - 1;
    const containsDraft = uniqueStatus.indexOf('draft') > - 1;
    const containsClosed = uniqueStatus.indexOf('closed') > - 1;

    containsActive ? eventStatus.push('active') : false;
    containsDraft ? eventStatus.push('draft') : false;
    containsClosed ? eventStatus.push('closed') : false;

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
      const statusTitle = _.upperFirst(status.replace('active', 'live'));
      return (
        <div key={status}>
          <div>{statusTitle}</div>
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
