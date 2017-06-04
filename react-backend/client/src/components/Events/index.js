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

  render() {
    const { statuses, liveStatuses } = this.state;
    const { events, handleSelect } = this.props;
    return (
      <nav>

        {/* Render Status Sections */}
        {statuses.map(status => {
          const isLive = liveStatuses.indexOf(status.type) > -1;
          if (isLive) {
            return (
              <ul className="nav flex-column" key={status.type}>
                <h4>{status.title}</h4>

                {/* Render Events */}
                {events.map(event => {
                  const statusMatch = event.attributes.status === status.type;
                  if (statusMatch) {
                    return <Event
                              key={event.id}
                              event={event}
                              handleSelect={handleSelect} />
                  } else {
                    return false;
                  }
                })}

              </ul>
            );
          } else {
            return false;
          }
        })}
      </nav>
    )
  }
}

export default Events;
