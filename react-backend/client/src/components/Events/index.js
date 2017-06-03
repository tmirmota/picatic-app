import React, { Component } from 'react';

class Events extends Component {
  renderEvents() {
    const events = this.props.events.map(event => {
      return (<div>{event.id}</div>)
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
