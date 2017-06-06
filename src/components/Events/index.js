import React, { Component } from 'react';
import _ from 'lodash';
import './Events.css'

// Material UI Components
import Menu from 'material-ui/Menu';

// Components
import Event from './Event';

// Styles to overwrite List component nested in Menu component
const styles = {
  paddingTop: 0,
  paddingBottom: 0
}

export default class Events extends Component {
  state = {
    statuses: [
      {type: 'active', title: 'Live'},
      {type: 'draft', title: 'Draft'},
      {type: 'closed', title: 'Closed'}
    ],
    liveStatuses: []
  }

  componentWillReceiveProps({ events }) {
    // Collect live event statuses to determine which status sections to render
    const allEventStatuses = _.map(events, 'attributes.status');
    const liveStatuses = _.uniq(allEventStatuses);

    this.setState({ liveStatuses });
  }

  render() {
    // Destructure props and state
    const { statuses, liveStatuses } = this.state;
    const { events, handleSelect } = this.props;

    // Sort events by descending date
    const descendingDateEvents = _.sortBy(events, [function ({attributes}) {
      return attributes.end_date;
    }]).reverse();

    return (
      <div>

        {/* Render Status Sections */}
        {statuses.map(status => {

          // Check if there are any events for this status section
          const isLive = liveStatuses.indexOf(status.type) > -1;

          if (isLive) {
            return (
              <div key={status.type} className="py-3">
                <div className="col">
                  <span className="manage_content_sidebar_status">
                    {status.title}
                  </span>
                </div>


                {/* Render Events */}
                {descendingDateEvents.map(event => {

                  // Render event if event status matches parent section status
                  const statusMatch = event.attributes.status === status.type;

                  if (statusMatch) {
                    return (
                      <Menu key={event.id} autoWidth={false} width={500} listStyle={styles} >
                        <Event
                          event={event}
                          handleSelect={handleSelect} />
                      </Menu>
                    )
                  } else {
                    return false;
                  }

                })}

              </div>
            );
          } else {
            return false;
          }
        })}

      </div>
    )
  }
}
