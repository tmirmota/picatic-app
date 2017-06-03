import React, { Component } from 'react';

import Event from './Event';

class Events extends Component {
  state = {
    eventSections: []
  }
  componentWillUpdate(nextProps) {
    const { events } = nextProps;
    console.log(events);
    events.map(event => {
      console.log(event.attributes.status);
    })

  }
  renderEvents() {
    const events = this.props.events.map(event => {
      return (
        <div key={event.id}>
          <Event event={event} />
        </div>
      );
    })
    return events;
  }
  render() {
    return (
      <div>
        {this.renderEvents()}
      </div>
    )
  }
}

export default Events;
