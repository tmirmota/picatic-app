import React, { Component } from 'react';
import './App.css';

// Components
import Events from './components/Events';
import SelectedEvent from './components/SelectedEvent';

// const API_KEY = 'sk_live_210eb57e6b95e5143c492a219091c4e5'; // Thomas'
const API_KEY = 'sk_live_f1090aeab90d8ed651128084abf4684f'; // Picatic Code Challenge

// 575569
// https://api.picatic.com/v2/event?filter[user_id]=575569&page[limit]=12&page[offset]=0

class App extends Component {
  state = {
    events: [],
    selectedEvent: {}
  }
  componentDidMount(){
    fetch('https://api.picatic.com/v2/event?filter[user_id]=575569&page[limit]=12&page[offset]=0', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    })
    // fetch('http://localhost:3000/event?filter[user_id]=575569&page[limit]=12&page[offset]=0')
    .then(res => res.json())
    .then(events => this.setState({ events: events.data }));

  }

  handleSelect = (event) => {
    this.setState({ selectedEvent: event });
  }

  render() {
    const { events, selectedEvent } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">

          {/* SideBar */}
          <div className="col-4">
            <div className="row">
              <div className="col manager_content_sidebar_top">
                <p className="text-white">Select an Event</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Events events={events} handleSelect={this.handleSelect} />
              </div>
            </div>
          </div>

          <SelectedEvent selectedEvent={selectedEvent} />

        </div>
      </div>
    );
  }
}

export default App;
