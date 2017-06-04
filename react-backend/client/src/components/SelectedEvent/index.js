import React, { Component } from 'react';

// Components
import Header from './Header';
import Table from './Table';

class SelectedEvent extends Component {
  render() {
    const { event, tickets } = this.props;
    if (event.id) {
      return (
        <div className="col-8">
          <div className="row">
            <div className="col">
              <Header title={event.attributes.title} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Tickets</p>
              <Table event={event} tickets={tickets} />
            </div>
          </div>
        </div>
      );
    } else {
      return false;
    }
  }
}

export default SelectedEvent;
