import React, { Component } from 'react';
import _ from 'lodash';
import './Events.css'

// Material UI Components
import Menu from 'material-ui/Menu';

// Components
import Event from './Event';

// Styles to overwrite list padding in Material UI Menu Component
const styles = {
  paddingTop: 0,
  paddingBottom: 0
}

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
      <div>

        {/* Render Status Sections */}
        {statuses.map(status => {
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
                {events.map(event => {
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

export default Events;
